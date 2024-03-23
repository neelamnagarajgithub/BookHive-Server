const express = require("express");
const Book = require("../Models/bookmodel");

const getallbooks = async (req, res) => {
  try {
    const allbooks = await Book.find();
    res.status(200).json({
      allbooks,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      msg: err.message,
    });
  }
};

const createbook = async (req, res) => {
  try {
    const newbook = await Book.create(req.body);
    res.status(201).json({
      newbook,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      msg: err.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const BookById = await Book.findById(req.params.id);
    res.status(200).json({
      BookById,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      msg: err.message,
    });
  }
};

const updatebook = async (req, res) => {
  try {
    const bookup = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      bookup,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      msg: err.message,
    });
  }
};

const deletebook = async (req, res) => {
  try {
    const deletebook = await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
      deletebook,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      msg: err.message,
    });
  }
};

module.exports ={ getallbooks, createbook, getById, updatebook, deletebook};
