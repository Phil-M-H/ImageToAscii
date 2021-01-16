module.exports = error_handler;

function error_handler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {//planned for future

        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token'});
    }

    // default to 500 server error
    console.log(`Error: ${err}`);
    return res.status(500).json({ message: err.message });
}