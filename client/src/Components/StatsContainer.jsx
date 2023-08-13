import Wrapper from "../Assets/wrappers/StatsContainer";
import { GiMoneyStack } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { useAppContext } from "../Contexts/AppContext";
import StatsItem from "./StatsItem";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "Cash payment",
      count: stats.cash || 0,
      icon: <GiMoneyStack />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "Mobile Money",
      count: stats["mobile money"] || 0,
      icon: <FaMoneyBills />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "online payment",
      count: stats["online payment"] || 0,
      icon: <MdPayment />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {
        defaultStats.map((item, index)=> {
          return <StatsItem key={index} {...item}/>
        })
      }
    </Wrapper>
  );
};

export default StatsContainer;
