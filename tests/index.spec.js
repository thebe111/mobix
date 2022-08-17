const req = require("supertest");
const app = require("./../src/entrypoints/app");

it(`scenario: returns infos of main characters
    given:
      - characters main req
    when:
      - 
    then:
      - returns infos about main characters
`, async () => {
   const setup = {
      endpoint: '/characters/main',
   };

   const res = await req(app).get(setup.endpoint);

   expect(res).toEqual(
      expect.arrayContaining([

      ]),
   );
});

it(`scenario: returns book cover
    given:
      - a book number
    when:
      - the book number is valid
    then:
      - return book cover
`, async () => {
   const setup = {
      endpoint: '/books/covers/:book',
      book: 3,
   };

   const res = await req(app).get(setup.endpoint.replace(':book', String(setup.book)));

   expect(res).toEqual(
      expect.objectContaining({

      }),
   );
});

it(`scenario: returns books covers
    given:
      - a books req
    when:
      - the book req doesn't have a number
    then:
      - return covers from all books
`, async () => {
   const setup = {
      endpoint: '/books/covers',
   };

   const res = await req(app).get(setup.endpoint);

   expect(res).toEqual(
      expect.arrayContaining([
         expect.objectContaining({}),
         expect.objectContaining({}),
      ]),
   );
});

it(`scenario: returns character infos
    given:
      - a character name
    when:
      - the character name is valid
    then:
      - return character info
`, async () => {
   const setup = {
      endpoint: '/charactes/details/:name',
      name: "",
   };

   const res = await req(app).get(setup.endpoint.replace(':name', setup.name));

   expect(res).toEqual(
      expect.objectContaining({

      }),
   );
});

it(`scenario: returns characters infos
    given:
      - a character req
    when:
      - the character req doesn't have a character name
    then:
      - return infos from all characters
`, async () => {
   const setup = {
      endpoint: '/charactes/details',
   };

   const res = await req(app).get(setup.endpoint);

   expect(res).toEqual(
      expect.arrayContaining([
         expect.objectContaining({}),
         expect.objectContaining({}),
      ]),
   );
});

it(`scenario: get all books related to a character
    given:
      - a character name
    when:
      - the character name is valid
    then:
      - return all books related to this character
`, async () => {
   const setup = {
      endpoint: '/charactes/:name/books',
      name: "",
   };

   const res = await req(app).get(setup.endpoint.replace(':name', setup.name));

   expect(res).toEqual(
      expect.objectContaining([
         expect.objectContaining({}),
         expect.objectContaining({}),
      ]),
   );
});
