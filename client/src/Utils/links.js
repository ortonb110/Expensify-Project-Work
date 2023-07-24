import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import {HiOutlineDocumentReport} from 'react-icons/hi'

const links = [
    {
        id: 1,
        text: 'Statistics',
        path: '/',
        icon: <IoBarChartSharp/>
    },
    {
        id: 2,
        text: 'All Expenses',
        path: 'all-expenses',
        icon: <MdQueryStats/>
    },
    {
        id: 3,
        text: 'Add Expense',
        path: 'add-expense',
        icon: <FaWpforms/>
    },
    
    {
        id: 5,
        text: 'report',
        path: 'report',
        icon: <HiOutlineDocumentReport/>
    },
    {
        id: 4,
        text: 'profile',
        path: 'profile',
        icon: <ImProfile/>
    },
]

export default links