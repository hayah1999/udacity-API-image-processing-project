import sharp from 'sharp';

function imageResize(
 imagePath: string,
 imageName: string,
 imageFormat: string,
 width: number,
 height: number
): object {
 const imageFullDir = imagePath + imageName + imageFormat;
 const resize = sharp(imageFullDir)
  .resize({
   width: width,
   height: height,
   fit: sharp.fit.fill,
  })
  .toFile(`./images/thumbs/${imageName}_${width}_${height}.png`);
 return resize;
}
export default imageResize;
