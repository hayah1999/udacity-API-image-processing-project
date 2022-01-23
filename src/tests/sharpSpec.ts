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
