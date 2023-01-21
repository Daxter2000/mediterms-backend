
const {signUpSchema} = require("./sign_up")
const {signInSchema} = require("./sign_in")
const {changePasswordSchema, resetPasswordSchema, saveNewPasswordSchema} = require("./password")

module.exports = {signUpSchema, signInSchema, changePasswordSchema, resetPasswordSchema, saveNewPasswordSchema}