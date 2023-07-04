import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../Contexts/AppContext"


const user = localStorage.getItem("user");

const Dashboard = () => {
  const navigate = useNavigate();
  
  // useEffect(()=> {
  //   setTimeout(()=> {
  //     if(!user) {
  //       navigate('/landing');
  //     }
  //   }, 2000)
  // })

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard