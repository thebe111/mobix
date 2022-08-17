const express = require("express");

const BooksHandler = require("./../services/handlers/booksHandler");
const BooksCharacterHandler = require("./../services/handlers/booksCharacterHandler");
const CharactersHandler = require("./../services/handlers/charactersHandler");
const MainCharactersHandler = require("./../services/handlers/mainCharactersHandler");

const handlers = {
   mainCharacter: new MainCharactersHandler(),
   character: new CharactersHandler(),
   booksCharacter: new BooksCharacterHandler(),
   book: new BooksHandler(),
};

const router = express.Router();

router.get('/characters/main', handlers.mainCharacter.index);

router.get('/characters/details', handlers.character.index);
router.get('/characters/details/:name', handlers.character.show)

router.get('/characters/:name/books', handlers.booksCharacter.show)

router.get('/books/covers', handlers.book.index);
router.get('/books/covers/:book', handlers.book.show);

module.exports = router;
