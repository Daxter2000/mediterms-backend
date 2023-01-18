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
        e.errors.map(error =>
            errors.push(`${error.message}`)
        )
        return {errors: errors, code: "SEQUELIZE_VALIDATION_ERROR"}
    }
    
    return {errors: [e.message], code: "CODE_STILL_NOT_IDENTIFIED"}
}

module.exports = {handleCommonErrors}