import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
        type: String,
        enum: ["user", "bot"],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    }
});

const chatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        default: "New Chat",
    },
    messages: [messageSchema]
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
