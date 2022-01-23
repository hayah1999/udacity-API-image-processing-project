import express from 'express';
import mainRoute from './routes';

const app = express();
const port = 8080;

//using my route in the server
app.use('/api', mainRoute);

//creating a server that listen on port 8080
app.listen(port, () => {
 console.log(`my server is up and running on localhost: ${port}`);
});
export default app;
