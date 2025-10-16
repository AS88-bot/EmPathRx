const AWS = require('aws-sdk');
const bedrock = new AWS.BedrockRuntime({ region: 'us-east-1' });

exports.handler = async (event) => {
  const { prompt } = JSON.parse(event.body);
  const params = {
    modelId: 'anthropic.claude-v2',
    contentType: 'application/json',
    accept: '*/*',
    body: JSON.stringify({ prompt, max_tokens: 300 }),
  };
  const response = await bedrock.invokeModel(params).promise();
  return {
    statusCode: 200,
    body: response.body,
  };
};
