import jwt from "jsonwebtoken";
export const verify = (req, res, next) => {
    try {
        const TOKEN = req.headers["authorization"].split(" ")[1];
        const { SECRET = "UL724_S3C237-K3Y!#" } = process.env;
        jwt.verify(TOKEN, SECRET, (err, data) => {
            if (err) return res.json({ message: "Debe iniciar sesión" })
            req.body.id = data.id
            next()
        });
    } catch (err) { res.json(err) }
};