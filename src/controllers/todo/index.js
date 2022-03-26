exports.getTodos = (req, res, next) => {
    res.status(200).json({
        message: 'Get Todos'
    });
}
exports.createTodo = (req, res, next) => {
    res.status(200).json({
        message: 'Post Todo'
    });
}
exports.updateTodo = (req, res, next) => {
    res.status(200).json({
        message: 'Put Todo'
    });
}
exports.deleteTodo = (req, res, next) => {
    res.status(200).json({
        message: 'Delete Todo'
    });
}
