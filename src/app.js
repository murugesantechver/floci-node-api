const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'floci-node-api',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/users', (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        name: 'Murugesan',
      },
    ],
  });
});

module.exports = app;