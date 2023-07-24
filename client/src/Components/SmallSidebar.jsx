import { useAppContext } from "../Contexts/AppContext";
import { GrClose } from "react-icons/gr";
import Wrapper from "../Assets/wrappers/SmallSidebar";
import logo from "../Assets/logo.png";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
  const { showSideBar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <button type="button" onClick={toggleSidebar}>
            <GrClose className="w-[4rem] h-[2.5rem]" />
          </button>
          <header className="flex items-center gap-2 text-[2rem] mt-[1.5rem]">
            <img src={logo} alt="Expensify trademark" />
            Expensify
          </header>
          <div className="nav-links">
            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
