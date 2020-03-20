const { model } = require("../models/model");
const path = require("path");

const getIndex = async (request, response) => {
  response.sendFile(path.join(__dirname, "../../index.html"));
};
const getIndex2 = async (request, response) => {
  response.sendFile(path.join(__dirname, "../../index2.html"));
};

//Get all books
const getAllBooks = async (request, response) => {
  try {
    console.log("GET BOOKS");
    var userInstances = await model.find({});
    response.send(userInstances);
  } catch (error) {
    response.status(500).send(error);
  }
};

//Post a Book
const postBook = async (request, response) => {
  try {
    console.log("POST BOOK");
    var userInstance = new model(request.body);
    const created = await model.create(userInstance);
    response.send(created);
  } catch (error) {
    response.status(500).send(error);
  }
};

//Modify a Book
const putBook = async (request, response) => {
  try {
    console.log("PUT BOOK");
    var userInstance = await model.findOneAndUpdate(
      request.query,
      request.body
    );
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

//Delete a Book
const deleteBook = async (request, response) => {
  try {
    console.log("DELETE BOOK");
    var userInstance = await model.deleteOne(request.query);
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getBook = async (request, response) => {
  try {
    console.log("GET BOOK");
    var userInstance = await model.find(request.body);
    //console.log(userInstance);
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = {
  getIndex,
  getIndex2,
  getAllBooks,
  postBook,
  putBook,
  getBook,
  deleteBook
};
