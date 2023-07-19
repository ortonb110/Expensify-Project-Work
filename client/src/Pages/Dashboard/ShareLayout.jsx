import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {BigSidebar, SmallSidebar} from '.././../Components/index'
const ShareLayout = () => {
  return (
    <Fragment>
      <nav>
        <SmallSidebar/>
        <BigSidebar/>
      </nav>
      <Outlet/>
    </Fragment>
  );
};

export default ShareLayout;
