import { Fragment } from "react";
import { ExpenseContainer, SearchContainer } from "../../Components/index";
const AllExpenses = () => {
  return (
    <Fragment>
      <SearchContainer />
      <ExpenseContainer />
    </Fragment>
  );
};

export default AllExpenses;
