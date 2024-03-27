import mongoose, { Schema } from "mongoose";

const subscriptionsSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chanel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = new mongoose.model(
  "Subscription",
  subscriptionsSchema
);
