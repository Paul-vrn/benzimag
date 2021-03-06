const jwt = require('jsonwebtoken')
const SECRET = require('../config').SECRET

const rateLimit = require('express-rate-limit')
const rateLimiter =  rateLimit({
   windowMs:60 * 60 * 1000,
   max: 10,
   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false,
    message:"Arrête de spam."
})
/* Récupération du header bearer */
const extractBearerToken = headerValue => {
    if (typeof headerValue !== 'string') {
        return false
    }
    const matches = headerValue.match(/(bearer)\s+(\S+)/i)
    return matches && matches[2]
}

/* Vérification du token */
const checkTokenMiddleware = (req, res, next) => {
    // Récupération du token
    if (req.headers.SECRET !== undefined){
        return (req.headers.SECRET===SECRET) ? next() : res.status(401).json({message:"SECRET failed"})
    }
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization)

    // Présence d'un token
    if (!token) {
        return res.status(401).json({ message: 'Error. Need a token' })
    }

    // Véracité du token
    jwt.verify(token, SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error. Bad token' })
        } else {
            return next()
        }
    })
}

module.exports.rateLimiter = rateLimiter
module.exports.checkTokenMiddleware = checkTokenMiddleware
