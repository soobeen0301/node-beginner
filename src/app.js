import express from 'express';
import { SERVER_PORT } from './constants/env.constant.js';
import { productsRouter } from './routers/products.router.js';
import { connect } from './schemas/index.js';
import { errorHandler } from './middlewares/error-handler.middleware.js';

connect();

const app = express();

// 두 개는 세트이므로 외워두고 사용하기
// body내용을 json으로 변경
app.use(express.json());
// form으로 넘어오는 데이터를 body로 넘겨줌
app.use(express.urlencoded({ extended: true }));

app.use('/api', productsRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on ${SERVER_PORT}`);
});
