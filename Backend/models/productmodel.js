const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    name:{
        type:String,
        required : [true,"Please Enter Product Name"],
        trim:true
    },

    description:{
        type:String,
        required : [true,"Please Enter Product Description"]
    },

    price:{
        type:Number,
        required : [true,"Please Enter Product price"],
        maxLength :[7,"Product price cannot exceed 7 characters"]
    },

    ratings:{
        type:Number,
        default:0
    },

    images:[
        {
            public_id:{ 
                type:String,
                required : true
                },
    
            url:{
                type:String,
                required : true
            }
        }
    ],
    
    category:{
        type:String,
        required : [true,"Please Enter Product Category"]
    },
    
    stock:{
        type:String,
        required : [true,"Please Enter Product Stock"],
        maxLength :[4,"Product Stock cannot exceed 4 characters"],
        default:1
    },

    numofReviews:{
        type:Number,
        default:0
    },

    reviews:[
     {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
        name:{
            type:String,
            required : true
        },
        rating:{
            type:Number,
            required : true
        },
        comment:{
            type:String,
            required : true
        }
     }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },

    createdAt:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model("Product",ProductSchema); 