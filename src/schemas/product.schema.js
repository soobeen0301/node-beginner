import mongoose from 'mongoose';
import { PRODUCT_STATUS } from '../constants/product.constant.js';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      //select 설정 시 find명령어에서만 가능
      select: false,
    },
    status: {
      type: String,
      enum: Object.values(PRODUCT_STATUS),
      default: PRODUCT_STATUS.FOR_SALE,
    },
  },
  { timestamps: true, toJSON: { virtual: true } }
);

export const Product = mongoose.model('Product', productSchema);
