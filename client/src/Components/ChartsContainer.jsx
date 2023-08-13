import AreaChartComponent from "./AreaChart"
import { useAppContext } from "../Contexts/AppContext"
import Wrapper from "../Assets/wrappers/ChartsContainer"

const ChartsContainer = () => {
    const {monthlyExpenses:data} = useAppContext();
  return (
    <Wrapper>
        <h1>Monthly Expenses</h1>
        <AreaChartComponent data={data}/>
    </Wrapper>
  )
}

export default ChartsContainer