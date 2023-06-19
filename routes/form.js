import express from 'express'
const router=express.Router();
import  {formSubmission} from '../controllers/formController.js';

router.post('/form', formSubmission);
export default router