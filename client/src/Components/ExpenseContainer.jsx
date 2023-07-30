import Wrapper from "../Assets/wrappers/JobsContainer"
import { useAppContext } from "../Contexts/AppContext"
import { useEffect } from "react"
import Loading from '../Components/Loading'
import {Expense} from '../Components/index'

const ExpenseContainer = () => {
    const {isLoading, getExpenses, expenses, numOfPages, totalExpenses, paymentMethod} = useAppContext();

    useEffect(()=> {
        getExpenses();
    }, [])

    if(isLoading) {
        return (
            <Loading center/>
        )
    }
    if(expenses.length === 0) {
        return (
            <Wrapper>
                <h2>No Expenses to display</h2>
            </Wrapper>
        )
    }
  return (
    <Wrapper>
        <h5>
        {totalExpenses} expense{totalExpenses > 1 && 's'}
        </h5>
        <div className="jobs">
            {
                expenses.map((expense) => {
                    return <Expense key={expense._id} {...expense}/>
                })
            }
        </div>
    </Wrapper>
  )
}

export default ExpenseContainer