// const connection = require("./../../entrypoints/mongo");

class BooksHandler {
   async index(req, res) {
      const payload = [];

      res.send(payload);
   }

   async show(req, res) {
      const book = req.params.book;
      // const mongoConnection = await connection();

      // const payload = await mongoConnection
         // .collection('books')
         // .find({ name: character });

      return res.send(book);
   }
}

module.exports = BooksHandler;
