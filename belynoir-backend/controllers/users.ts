import {Request, Response} from "express";
import {v4 as uuidv4} from 'uuid';
import * as bcrypt from "bcryptjs"
import usersModel from "../models/users";
import {User} from "../entities/users";

export const createUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {

        const salt = bcrypt.genSaltSync(10);

        const user: User = {
            email,
            password: bcrypt.hashSync(password, salt),
            user_id: uuidv4()
        }

        await usersModel.insert(user);

        return res.status(201).json({
            ...user,
            password: undefined
        });

    } catch(error) {
        return res.status(500).json(error);
    }
}
