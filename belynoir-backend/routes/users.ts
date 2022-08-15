import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields } from "../middlewares";
import { createUser } from "../controllers/users";
import {existsUserEmail} from "../helpers/users/users-validators";

const router = Router();

router.post('/', [
    check('email', 'The e-mail is mandatory').not().isEmpty(),
    check('email', 'The e-mail is invalid').isEmail(),
    check('password', 'The password length must be higher than 8 characters').isLength({min: 8}),
    check('email').custom(existsUserEmail),
    validateFields
], createUser);


export default router;
