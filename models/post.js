const mongoose = require('mongoose') ;

const PostSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId ,
        ref : "user"
    },
    date : {
        type : Date ,
        default : Date.now
    },
    content : String ,
    likes : [
        {type : mongoose.Schema.ObjectId , ref : "user"}
    ]
}) ;

module.exports = mongoose.model("post" , PostSchema) ;