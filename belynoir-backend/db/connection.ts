import { BigQuery } from '@google-cloud/bigquery';

const db = new BigQuery();

export const dbConstants = {
    dbName: 'belynoir_qrcode_db',
    tables: {
        users: 'users_table'
    }
}

export default db;
