
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://demoUser:demoUser123@cluster0.1leui.mongodb.net/bpl_task?retryWrites=true&w=majority"
    )
}

module.exports = connect