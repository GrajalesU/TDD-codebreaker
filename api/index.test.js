const request = require('supertest');
const api = require('./index');


describe("testing /codebreaker path", () => {
  test("it should return status code 200", done => {
    request(api)
      .get("/codebreaker") // Act
      .then(response => {
        expect(response.statusCode).toBe(200); //Assert
        done();
      });
  });

  test("it should return application/json", done => {
    request(api)
      .get("/codebreaker")
      .then(response => {
        expect(response.type).toBe("application/json");
        done();
      });
  });

  test("it should return not null body", done => {
    request(api)
      .get("/codebreaker")
      .then(response => {
        expect(response.body).not.toBeNull();
        expect(response.body.res).not.toBeUndefined();
        done();
      });
  });

  test("it should return a valid response", done => {
    request(api)
      .get("/codebreaker")
      .then(response => {
        expect(response.body.res).toBe('Secret updated');

        done();
      });
  });

})

