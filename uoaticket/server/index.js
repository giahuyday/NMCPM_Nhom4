import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
// import userRoute from "./router/user.js";
import mongoose, { mongo } from "mongoose";
import { userModel } from "./models/userModels.js"
import { filmModel } from "./models/filmModels.js";

const app = express()
const PORT = process.env.port || 5000
// import pkg from 'jsonwebtoken';

const URL = 'mongodb+srv://giahuy:huy301220023012@cluster0.famhhks.mongodb.net/user?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors());


app.get('/', (req, res) => {
    res.send('success');
})


// app.use('/user', userRoute)
const user = userModel
const film = filmModel

app.use('/signup', async (req, res) => {
    const { userName, password } = req.body;
    // const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        // const existUser = user.findOne({ userName })
        // if (!existUser) {
        //     return res.send({ error: "username existing" })
        // }
        await user.create({
            userName,
            password //: encryptedPassword,
        });
        res.send({ status: 'ok' })
    } catch (error) {
        res.send({ status: "error" })
    }
})


app.use('/createfilm', async (req, res) => {
    const { filmname, desciption, images } = req.body;
    try {
        await film.create({
            filmname,
            desciption,
            images,
        });
        res.send({ status: 'ok' })
    } catch (error) {
        res.send({ status: "error" })
    }
})

app.use('/getfilm', async(req, res) => {
    const { filmname, images } = req.body;
    const films = await film.find();
    if (!films) {
        res.send({ error: 'film not found' })
    }
    else{return res.json(films)
}})

app.use('/getfilm/:id', async(req, res) => {
    const films = await film.findById(req.params.id)
    if (!films) {
        res.send({ error: 'film not found' })
    }
    else{return res.json(films)
}})

app.use('/login', async (req, res) => {
    const { userName, password } = req.body;
    const users = await user.findOne({ userName });
    if (!users) {
        res.send({ error: 'user not found' })
    }
    else if(await password === users.password)
        return res.json({ status: "ok", data: userName })
    else {
        return res.json({ error: "error" })
    }
})

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB')
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        });
    })
    .catch((err) => {
        console.log('err', err)
    });