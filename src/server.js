const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down...');

  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down...');

  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});