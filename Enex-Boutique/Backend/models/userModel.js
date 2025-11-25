import mongoose from "mongoose";
import { object } from "prop-types";

const userSchema = new mongoose.Schema({

    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    vcartData:{type:object, default:{}},
}, {minimize:false});
 


const userModel = mongoose.model.user || mongoose.model("User", userSchema);

export default userModel;
