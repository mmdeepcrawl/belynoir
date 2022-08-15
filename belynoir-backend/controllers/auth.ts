import {Request, Response} from "express";
import usersModel from "../models/users";
import {dbConstants} from "../db/connection";
import {SimpleQueryRowsResponse} from "@google-cloud/bigquery";
import * as bcrypt from "bcryptjs"

export const login = async (req: Request, res: Response) => {

    try {

        const {email, password} = req.body;

        const getUserResponse: SimpleQueryRowsResponse = await usersModel.query({
            query: `SELECT * FROM ${dbConstants.tables.users} WHERE email=?`,
            params: [email]
        })

        const [[user]] = getUserResponse;

        if (!user) {
           return res.status(400).json({
               message: "Username and password combination is not correct"
           });
        }

        const validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword) {
            return res.status(400).json({
                message: "Username and password combination is not correct"
            });
        }

        return res.json({
            ...user,
            password: undefined
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'There was a problem with the login'
        })
    }
}

