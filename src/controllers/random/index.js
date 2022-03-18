exports.getRandomNumber = (req, res, _) => {
    return res.json({
        success: true,
        number: Math.ceil(Math.random() * 100000)
    })
}