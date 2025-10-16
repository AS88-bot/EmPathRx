export async function sendAlertSMS(message, phoneNumber) {
  // TODO: Replace with actual AWS Lambda endpoint
  await fetch('https://your-lambda-endpoint/sns', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, phoneNumber }),
  });
}
