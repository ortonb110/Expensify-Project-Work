import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const ShareLayout = () => {
  return (
    <Fragment>
      <nav>
        <Link to="add-expense">Add Expense</Link>
        <Link to="all-expenses">All Expenses</Link>
      </nav>
      <Outlet/>
    </Fragment>
  );
};

export default ShareLayout;
