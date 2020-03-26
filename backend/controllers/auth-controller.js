// Create a Feedback
exports.checkAuth = (req, res, next) => {
    let username = 'shahzeb';
    let password = "shah123"
    console.log("body of admin>>>", req.body);

    if (username == req.body.username && password == req.body.password) {
        res.status(201).json({
            message: "Password is matched"
        });
    } else {
        res.status(201).json({
            message: "Please check username & password"
        });
    }


}
