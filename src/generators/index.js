const q = require('inquirer');
const ejs = require('ejs')
const { startCase } = require('lodash')
const fs = require('fs')
require('colors');
const {  CONTROLLER, MODEL, ROUTE } = require('../utils/generators');


q.prompt([
    {
        type: 'input',
        name: 'api',
        message: 'What will be the name of your API? (keep it singular and small case)',
    },
    {
        type: 'confirm',
        name: 'generateModel',
        message: 'Do you want model for this API?',
    },
]).then(async answers => {
    // destructure the answers
    const { api, generateModel } = answers;

    // get route template
    const routeTemplate = fs.readFileSync(`${__dirname}/routes/index.ejs`, 'utf-8');
    const renderedRoute = ejs.render(routeTemplate, { api: startCase(api), apis: api });

    // get controller template
    const controllerTemplate = fs.readFileSync(`${__dirname}/controllers/index.ejs`, 'utf-8');
    const renderedController = ejs.render(controllerTemplate, { startCaseApi: startCase(api), api });

    // get model template
    const modelTemplate = fs.readFileSync(`${__dirname}/models/index.ejs`, 'utf-8');
    const renderedModel = ejs.render(modelTemplate, { startCaseApi: startCase(api), api });

    // create controller
    if (!fs.existsSync(`${CONTROLLER}/${api}`)) {
        fs.mkdirSync(`${CONTROLLER}/${api}`);
        fs.writeFileSync(`${CONTROLLER}/${api}/index.js`, renderedController);
    } else {
        console.log("Folder with same resource name already exists");
    }

    // create model
    if (generateModel) {
        if (!fs.existsSync(`${MODEL}/${startCase(api)}`)) {
            fs.mkdirSync(`${MODEL}/${startCase(api)}`);
            fs.writeFileSync(`${MODEL}/${startCase(api)}/index.js`, renderedModel);
        } else {
            console.log("Folder with same resource name already exists");
        }
    }

    // create route
    if (!fs.existsSync(`${ROUTE}/${startCase(api)}`)) {
        fs.mkdirSync(`${ROUTE}/${api}s`);
        fs.writeFileSync(`${ROUTE}/${startCase(api)}s/index.js`, renderedRoute);
    } else {
        console.log("Folder with same resource name already exists");
    }

    console.log(`
        Final step - 
        Navigate to src/routes/index.js and add the following code:
        router.use('/${api}s', require('./${api}s'));
    `.green);
}).catch(err => {
    console.log(err);
})