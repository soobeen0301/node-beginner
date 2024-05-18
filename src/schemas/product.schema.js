import mongoose from 'mongoose';
import { PRODUCT_STATUS } from '../constants/product.constant';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desciption: {
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
      select: false,
    },
    status: {
      type: String,
      enum: Object.values(PRODUCT_STATUS),
      default: PRODUCT_STATUS.FOR_SALE,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export const Product = mongoose.model((name = 'Product'), productSchema);
