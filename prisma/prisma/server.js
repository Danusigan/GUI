const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    res.json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: 'Username already exists' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  // Compare passwords
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  // Generate a token (optional)
  const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
    expiresIn: '1h',
  });

  res.json({ message: 'Login successful', token });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});