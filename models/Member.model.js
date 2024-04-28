import { Schema, model } from "mongoose";

const memberSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: String,
    membershipStatus: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "pending",
    },
    joinedDate: { type: Date, default: Date.now },
  });
  
  const Member = model("Member", memberSchema);
  export default Member;
  