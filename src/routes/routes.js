const {
  getAllBooks,
  postBook,
  putBook,
  getBook,
  deleteBook,
  getIndex,
  getIndex2
} = require("../controllers/controller");

const routes = app => {
  app.route("/books").get(getAllBooks);
  app.route("/").get(getIndex);
  app.route("/index2").get(getIndex2);

  app
    .route("/book")
    .post(postBook)
    .put(putBook)
    .get(getBook)
    .delete(deleteBook);
};

module.exports = { routes };
