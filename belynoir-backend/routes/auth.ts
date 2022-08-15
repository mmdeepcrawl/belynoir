import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields } from "../middlewares";
import { login } from "../controllers/auth";

const router = Router();

router.post('/login', [
    check('email', 'The e-mail is mandatory').isEmail(),
    check('password', 'The password is mandatory'),
    validateFields
], login);


export default router;
