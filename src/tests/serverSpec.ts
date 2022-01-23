//importing third party framework to test my endpoint
import supertest from 'supertest';
import app from '../server';
// creating a variable to inform supertest which endpoint to work on
const request = supertest(app);

describe('Testing my endpoint responses', (): void => {
 it('checks the get api method of my endpoint work and the image is sent', async () => {
  const response = await request.get(
   '/api/images?filename=fjord&width=200&height=200'
  );
  expect(response.status).toBe(200);
 });
 it("checks if get api method of my endpoint doesn't work and the image is not sent it send an image of no image found", async () => {
  const response = await request.get(
   '/api/images?filename=fjords&width=300&height=300'
  );
  expect(response.status).toBe(200);
 });
});
