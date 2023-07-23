import {  Outlet } from "react-router-dom";
import {BigSidebar, SmallSidebar} from '.././../Components/index'
import Wrapper from '../../Assets/wrappers/SharedLayout'
import NavBar from "../../Components/NavBar";
const ShareLayout = () => {
  return (
    <Wrapper>
        <main className="dashboard">
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <NavBar/>
              <div className="dashboard-page">
                <Outlet/>
              </div>
            </div>
        </main>
    </Wrapper>
  );
};


{/* <nav>
        <SmallSidebar/>
        <BigSidebar/>
      </nav>
      <Outlet/> */}
export default ShareLayout;
