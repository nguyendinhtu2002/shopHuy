const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        sex: {
            type: String,
            default: "Nam",
        },
        password: {
            type: String,
            required: true,
        },
        address: [
            {
                address: {
                    type: String,
                },
                ward: {
                    type: String,
                },
                district: {
                    type: String,
                },
                city: {
                    type: String,
                },
                code: [String],
            },
        ],
        phoneNumber: {
            type: String,
            require:true,
        },
        wishList: [String],
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
// Login
userSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};

// Register
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model("User", userSchema);

module.exports = User;