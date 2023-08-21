const User = require('../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();


class AuthController {
    static async register(req, res) {

        const { name, email, password } = req.body
        
        if(!name || !email || !password)
            return res.status(400).send({ message: "Name or email or password not provider" })
        
        const salt = await bcrypt.genSalt(12)
        const passHash = await bcrypt.hash(password, salt)

        const user = new User ({
            name: name,
            email: email,
            password: passHash
        })

        try {
            await user.save()
            return res.status(201).send({message: "user created" })
        } catch(error) {
            return res.status(500).send({ message: "something faild" })
        }
    
    }
    static async login(req, res) {
        const { email, password } = req.body

        if(!email || !password)
            return res.status(400)
                .send({ message: "Email or password not provider" })
        try{

            const user = await User.find({ email })
            if (!user)
                return res.status(400)
                    .send({ message: "Invalid Email or password" })
            

            user.map(u =>
                    {
                        if(bcrypt.compare(u.password) == password) 
                            return u        
                    } 
                )
                const secret = process.env.SECRET
            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret,
                {
                    expiresIn: '1 day'
                }
            )
            return res.status(200).send({ token: token})
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "something wrong" })
        }
    }
}

module.exports = AuthController