const {ValidationError, DatabaseError, ConnectionError, QueryError, AggregateError, InstanceError} = require('sequelize')

const handleCommonErrors = (e) =>{
    const errors = []

    if( e instanceof DatabaseError) 
        return {errors: [e.message], code: "SEQUELIZE_DATABASE_ERROR"}
    if( e instanceof AggregateError)
        return {errors: [e.message], code: "SEQUELIZE_AGGREGATE_ERROR"}
    if( e instanceof ConnectionError)
        return {errors: [e.message], code: "SEQUELIZE_CONNECTION_ERROR"}
    if( e instanceof InstanceError)
        return {errors: [e.message], code: "SEQUELIZE_INSTANCE_ERROR"}
    if( e instanceof QueryError)
        return {errors: [e.message], code: "SEQUELIZE_QUERY_ERROR"}
    if (e instanceof ValidationError) {
        e.errors.map(error =>{
            let message = ""
            switch (error.validatorKey) {
                case 'isEmail':
                    message = 'Porfavor inserte un correo electronico correcto'; break;
                case 'not_unique':
                    message = error.value + ' ha sido tomado. Seleccione otro'; break;
            }
            errors.push(`${message}`)
            }
        )
        return {errors: errors, code: "SEQUELIZE_VALIDATION_ERROR"}
    }
    if( e.code === "InvalidParameterValue") 
        return {errors: [e.message], code: "SES_JSON_BAD_FORMATTED"}
    if(e.code  === "MessageRejected")
        return {errors: [e.message], code: "SES_MESSAGE_REJECTED"}
    return {errors: [e.message], code: "CODE_STILL_NOT_IDENTIFIED"}
}

module.exports = {handleCommonErrors}