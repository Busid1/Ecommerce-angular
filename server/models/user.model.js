import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: { type: String, default: "user" },
    cart: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    purchases: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema);