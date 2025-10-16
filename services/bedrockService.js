export async function getEmpatheticResponse(prompt) {
  // TODO: Replace with actual AWS Lambda endpoint
  const response = await fetch('https://your-lambda-endpoint/bedrock', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json();
  return data.completion;
}
