const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend работает! ✅' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend запустился на http://localhost:${PORT}`);
});
