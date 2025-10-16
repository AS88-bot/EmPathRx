const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
  const { message, phoneNumber } = JSON.parse(event.body);
  await sns.publish({ Message: message, PhoneNumber: phoneNumber }).promise();
  return { statusCode: 200, body: 'Alert sent' };
};
