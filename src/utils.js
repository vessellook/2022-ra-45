export function randomColor() {
  // чтобы выбирались не слишком тёмные цвета
  const r = Math.floor(128 + Math.random() * 128);
  const g = Math.floor(128 + Math.random() * 128);
  const b = Math.floor(128 + Math.random() * 128);
  return `rgb(${r}, ${g}, ${b})`;
}

export function getCookie(name) {
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length) === name && cookie.substring(name.length, name.length + 1) === '=') {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
  }
  return null;
}
