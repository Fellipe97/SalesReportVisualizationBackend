import express from "express";
import functionsApi from './controller/FunctionsController';


const FunctionsController = functionsApi();
const router = express.Router()


router.get('/', FunctionsController.teste)
router.get('/getAllReport', FunctionsController.getAllReport)

export default router;