import db, {dbConstants} from "../db/connection";

export const usersModel = db.dataset(dbConstants.dbName).table(dbConstants.tables.users);

export default usersModel;
