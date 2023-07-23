import Wrapper from "../Assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import logo from "../Assets/logo.png";
import { useAppContext } from "../Contexts/AppContext";
const BigSidebar = () => {
  const { showSideBar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container " : " sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header className="gap-2 flex text-[2rem] font-bold tracking-wider">
            <img src={logo} alt="Expensify trademark" />
            Expensify
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
