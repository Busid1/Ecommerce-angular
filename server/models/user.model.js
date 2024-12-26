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
            product: {
                _id: { type: Schema.Types.ObjectId, required: true },
                price: { type: Number, required: true },
                image: { type: String, required: true },
                title: { type: String, required: true },
            },
            quantity: {
                type: Number,
                default: 1,
            },
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