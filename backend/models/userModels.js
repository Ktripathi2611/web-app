import mongoose from 'mongoose'; // Use lowercase 'mongoose' to match the variable

const userSchema = new mongoose.Schema({ // Use 'mongoose.Schema' with lowercase 'mongoose'
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
