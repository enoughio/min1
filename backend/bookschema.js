import mongoose from "mongoose";

const bookschema = mongoose.Schema(
     
     {
               title: {
                    type: String,
                    required: true
               },

               Auther: {
                    type: String,
                    required: true,
               },

               publishyear: 
               {
                    type: String,
                    required: true
               },
     },

     {
          timestamp: true,
     }
);

export const book =  mongoose.model( 'cat', bookschema);