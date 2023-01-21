const aws = require("aws-sdk")

class SES {
    constructor(){
        aws.config = new aws.Config();
        aws.config.accessKeyId = process.env["AWS_SECRET_ACCESS_ID"];
        aws.config.secretAccessKey = process.env["AWS_SECRET_ACCESS_KEY"];
        aws.config.region = process.env["AWS_REGION"]
        this.SES = new aws.SES({apiVersion: '2010-12-01'})
    }

    sendEmail(){

    }

    async sendTemplatedEmail(params){
      const body = {
          Destination: { 
            ToAddresses: [ ...params["addresses"]]
          },
          Source: params["sourceAddress"], 
          Template: params["template"],
          TemplateData: params["templateData"]
        };
      return new aws.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(body).promise();
    }
}

module.exports = {SES}
