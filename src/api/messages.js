const apiUrl = process.env.REACT_APP_API_URL;

console.log('apiUrl', apiUrl);

export async function loadMessages(fromId) {
  if (fromId == null) {
    fromId = 0;
  }
  const url = new URL(`/messages?from=${encodeURI(fromId)}`, apiUrl);
  const response = await fetch(url);
  return await response.json();
}

export async function sendMessage(message) {
  const url = new URL('/messages', apiUrl);
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
}
