import express,{query} from "express";
import cors from 'cors'
import con from "./utils/db.js";
import multer from "multer";
import path from "path";

const app = express()
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())
app.use(express.static("Public"))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

app.post("/register",upload.fields([{name:'photo'},{name:'resume'}]),(req,res)=>{
    const sql = `INSERT INTO register (name,email,mobile,experience,photo,resume) VALUES(?)`
    const values = [
        req.body.name,
        req.body.mail,
        req.body.mobile,
        req.body.experience,
        req.files['photo'][0].filename,
        req.files['resume'][0].filename
    ]

    con.query(sql,[values],(err, result)=>{
        if(err) return res.json({Status: false, Error: "Error"+err})
            return res.json({Status: true})
    })
})

app.listen(3001, ()=>{
    console.log("Server is running");
})