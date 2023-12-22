import mongoose, { Schema, Model } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = Schema({
    watchHistory: {
        type: [Schema.Types.ObjectId],
        ref: "Video",
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // lowercase: true: Converts the value of the username field to lowercase.
        trim: true,
        // trim: true: Removes leading and trailing whitespaces from the username field.
        index: true
        // creating an index on a field can significantly improve query performance. The index: true option in Mongoose schema is used to create an index on a specific field. Indexing allows MongoDB to quickly locate and retrieve documents based on the indexed field.
        // Keep in mind that while indexing improves query performance, it comes with trade - offs.Indexes consume disk space, and updates to indexed fields may be slightly slower.Therefore, it's essential to carefully consider which fields to index based on the queries you frequently perform.

    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide the email"],
        lowercase: true,
        trim: true
    },
    fulName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Please provide the password"],

    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })



userSchema.pre("save", async function (next) {
    if (!this.isModified) return next()
    this.password = await bcrypt.hash(this.password, 10, (err, encrypted) => {
        console.log("The password is successfully encrypted", encrypted);
        next();
    })
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// JSON Web Tokens (JWT) can be used for authentication in a Mongoose-based application to generate and verify tokens. 
userSchema.methods.generateAccessToken = async function () {

    return (jwt.sign({ _id: this._id, email: this.email, fullName: this.fulName }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_Expiry }))

}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const User = Model("User", userSchema);
export default User
