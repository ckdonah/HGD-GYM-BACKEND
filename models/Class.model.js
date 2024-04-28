import { Schema, model } from "mongoose";

const classSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  duration: Number, // duration in minutes
  capacity: Number, // maximum number of participants
});

const Class = model("Class", classSchema);
export default Class;
