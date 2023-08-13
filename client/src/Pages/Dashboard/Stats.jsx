import { useAppContext } from "../../Contexts/AppContext";
import { Fragment, useEffect } from "react";
import Loading from "../../Components/Loading";
import { StatsContainer, ChartsContainer } from "../../Components/index";

const Stats = () => {
  const { isLoading, stats, showStats, monthlyExpenses } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Fragment>
      <StatsContainer />
      {monthlyExpenses.length > 0 && <ChartsContainer />}
    </Fragment>
  );
};

export default Stats;
