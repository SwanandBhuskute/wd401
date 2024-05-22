// Example using dynamic import for lazy loading
const button = document.getElementById('myButton');
button.addEventListener('click', async () => {
  const module = await import('./module.js');
  module.default();
});
