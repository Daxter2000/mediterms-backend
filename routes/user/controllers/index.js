

const {signUp} = require("./sign_up")
const {signIn} = require("./sign_in")
const {changePassword, resetPassword, saveNewPassword} = require("./password")
const {validateEmail} = require("./email")

module.exports = {signUp, signIn, changePassword, resetPassword, saveNewPassword, validateEmail}