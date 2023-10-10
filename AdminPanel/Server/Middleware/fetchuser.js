const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

const fetchuser = (req, res, next) => {

    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Authenticate with correct valid token" })
    }

    try {
        const data = jwt.verify(token, process.env.Secret_Key);
        req.users = data.user;
        next();
    }

    catch (error) {
        res.status(401).send({ error: "Token not received in fetchall" });
    }
}

module.exports = fetchuser;