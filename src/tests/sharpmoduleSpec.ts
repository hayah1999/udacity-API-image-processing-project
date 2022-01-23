//importing third party framework to test my endpoint
import supertest from 'supertest';
import mainRoute from '../routes';
import {promises as fspromises} from 'fs';
import {constants} from 'fs';
import imageUrl from '../routes/utilites/sharpmodule';
import sharp from 'sharp';
const request = supertest(mainRoute);

describe('Testing for my sharpmodule.ts file that have my sharp module', (): void => {
 it('checks the image processing is working and the image is saved in the thumbs folder', async () => {
  request.get('/api/images?filename=fjord&width=200&height=200');
  await expectAsync(
   fspromises.access(`./images/thumbs/fjord_200_200.png`, constants.F_OK)
  ).toBeResolved();
 });
 it('checks the image processing is not working and the image is not saved in the thumbs folder', async () => {
  request.get('/api/images?filename=fjord&width=300&height=300');
  await expectAsync(
   fspromises.access(`./images/thumbs/fjordss_300_300.png`, constants.F_OK)
  ).toBeRejected();
 });
 it('tests funcationality of sharp function for image processing ', () => {
  const image: string = './images/fjord.jpg';

  function imageResize(imagePath: string): object {
   const resize = sharp(imagePath)
    .resize({
     width: 400,
     height: 400,
     fit: sharp.fit.fill,
    })
    .toFile(`./images/thumbs/fjorrr_400_400.png`)
    //https://sharp.pixelplumbing.com/api-resize
    .then((data) => {
     console.log(data);
    });
   return resize;
  }
  expect(imageResize(image)).toBeTruthy({
   format: 'png',
   width: 400,
   height: 400,
   channels: 3,
   premultiplied: false,
   size: 350498,
  });
 });
});
