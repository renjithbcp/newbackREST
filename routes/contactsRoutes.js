import express from "express";
const router =express.Router();
import {getContact,getAllContact,updateContact,createContact,deleteContact} from '../controllers/contactControllers.js';

router.route('/').get(getAllContact);

router.route('/').post(createContact);

 router.route('/:id').get(getContact);

router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);


export default router;