import { json } from 'stream/consumers';
const express = require('express');
import { UserController } from "./components/controller/user.controller";
import { createContext } from "./components/service/prisma.service";
import { Request, Response } from 'express';

const context = createContext();

const userController = new UserController(context);

const app = express();
const apiRouter = express.Router();

apiRouter.post('/user', (req:Request, res:Response) => userController.registerUser(req, res))
apiRouter.get('/user', (req:Request, res:Response) => userController.getAllUsers(req, res))

app.use(express.json())
app.use(apiRouter)
app.listen(5000)
console.log("Listening on port 5000")
console.log(userController)