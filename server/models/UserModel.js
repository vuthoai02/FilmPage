import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Boolean,
        default: false,
    },
});

export const UserModel = mongoose.model('User', schema);