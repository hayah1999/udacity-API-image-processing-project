import express from 'express';
import {promises as fspromises} from 'fs';
import {constants} from 'fs';
import sharp from 'sharp';
import imageResize from './sharp';

async function imageUrl(
 req: express.Request,
 res: express.Response,
 next: Function
) {
 //setting variable to capture input parameter from the request
 const fileName = req.query.filename as string;
 const widthParam = req.query.width as string;
 const heightParam = req.query.height as string;

 //input validation from this website https://malcoded.com/posts/nodejs-image-resize-express-sharp/
 let width: number;
 let height: number;

 if (widthParam != null) {
  width = parseInt(widthParam);
 } else {
  width = 200;
 }
 if (heightParam != null) {
  height = parseInt(heightParam);
 } else {
  height = 200;
 }
 try {
  await fspromises.access(
   `./images/thumbs/${fileName}_${width}_${height}.png`,
   constants.F_OK
  );
  const imageProcessedPath = `${fileName}_${width}_${height}.png`;
  res.sendFile(imageProcessedPath, {root: 'images/thumbs'});
 } catch {
  //to ensure that the image requested exist in image folder
  try {
   await fspromises.access(`./images/${fileName}.jpg`, constants.F_OK);
   //make thumbs directory if doesn't exist
   await fspromises.mkdir('images/thumbs', {recursive: true});
   sharp.cache(true);
   await imageResize('./images/', fileName, '.jpg', width, height);

   //telling the browser the response type is PNG
   res.type('png');
   // saving the image name in a imagePath variable to pass it with its root for the response to send the image to the browser
   const imagePath = `${fileName}_${width}_${height}.png`;
   res.sendFile(imagePath, {root: 'images/thumbs'});
  } catch {
   const imageErrPath = `icon-no-image.png`;
   res.sendFile(imageErrPath, {root: 'images'});
  }
  next();
 }
}
export default imageUrl;
