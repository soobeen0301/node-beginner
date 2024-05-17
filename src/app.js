import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  return res.json({ message: 'hello!' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
