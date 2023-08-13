import {readFile} from 'fs/promises'
import dotenv from 'dotenv'
dotenv.config()
import connect from './DB/Connect.js'
import Expenses from './Model/Expenses.js'


const start = async ()=> {
    try {
        await connect(process.env.MONGO_URI)
        const expenseJob = JSON.parse(await readFile(new URL("./data.json", import.meta.url)))
        await Expenses.create(expenseJob);
        console.log('Success');
        process.exit(0);
    } catch (error) {
        console.log(error);
    }
}

start();