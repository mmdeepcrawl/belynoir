import usersModel from "../../models/users";
import {dbConstants} from "../../db/connection";
import {SimpleQueryRowsResponse} from "@google-cloud/bigquery";


export const existsUserEmail = async (email: string) => {
    const queryResponse: SimpleQueryRowsResponse = await usersModel.query({
        query: `SELECT email FROM ${dbConstants.tables.users} WHERE email=?`,
        params: [email]
    })

    const [emailsExists] = queryResponse;
    if(emailsExists.length) {
        throw new Error('Email already exists');
    }
}
