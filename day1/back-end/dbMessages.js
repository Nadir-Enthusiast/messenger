import mongoose from "mongoose"

const messengerSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: String
});

export default mongoose.model("messagecontents", messengerSchema)
