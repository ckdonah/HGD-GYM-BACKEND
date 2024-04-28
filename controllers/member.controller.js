import Member from "../models/Member.model.js";
import asyncHandler from "../config/asyncHandler.js";

export const addMember = asyncHandler(async (req, res) => {
  const member = await Member.create(req.body);
  res.status(201).json(member);
});

export const getMembers = asyncHandler(async (req, res) => {
  const members = await Member.find({});
  res.status(200).json(members);
});

export const updateMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(member);
});
