<<<<<<< HEAD
import imageResize from '../routes/utilites/sharp';

it('tests funcationality of sharp function for image processing ', () => {
 expect(imageResize('./images/', 'encenadaport', '.jpg', 400, 500)).toBeTruthy({
  format: 'png',
  width: 400,
  height: 400,
  channels: 3,
  premultiplied: false,
  size: 350498,
 });
});
||||||| f1d0ea9
=======
import sharp from 'sharp';

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
>>>>>>> 38eeb6eaa69053ae9b4da6e92618251a18ed3620
