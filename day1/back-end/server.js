// IMPORTS
import express from "express"
import mongoose from "mongoose"
import Messages from "./dbMessages.js"
import Pusher from "pusher"
import cors from "cors"

// APP CONFIGURATION
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
  // config
});

// MIDDLEWARE 
app.use(express.json())
app.use(cors())

/*
// cors does the following on its own
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origins", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})
*/

// DATABASE CONFIGURATION
const connectUrl = '' // config

mongoose.connect(connectUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once("open", ()=> {
    console.log("db connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();
    changeStream.on("change", (change) => {
        console.log('change commited ',change)

        if(change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        } else {
            console.log("Something went wrong and Pusher was not triggered")
        }
    })
})

// API ROUTES
app.get("/", (req,res)=>res.status(200).send("hello world!"))

app.get('/messages/sync', (req, res) => {
    Messages.find((err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=> {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(`message created: \n ${data}`)
        }
    })
})

app.listen(port,()=> console.log(`you're on ${port}`))
