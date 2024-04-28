import Class from "../models/Class.model.js";
import asyncHandler from "../config/asyncHandler.js";

export const createClass = asyncHandler(async (req, res) => {
  const gymClass = await Class.create(req.body);
  res.status(201).json(gymClass);
});

export const getClasses = asyncHandler(async (req, res) => {
  const classes = await Class.find({});
  res.status(200).json(classes);
});

export const updateClass = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedClass = await Class.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedClass);
});

export const deleteClass = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Class.findByIdAndDelete(id);
  res.status(204).send();
});
