import Wrapper from "../Assets/wrappers/Navbar";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

import { useAppContext } from "../Contexts/AppContext";

import { useState } from "react";

const NavBar = () => {
  const { toggleSidebar, logoutUser, user, showSideBar } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn flex flex-col gap-[0.3rem]"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="w-[2.5rem] h-[0.2rem] bg-[#2cb1bc] "></span>
          <span
            className={
              showSideBar
                ? "w-[2.5rem] h-[0.2rem] bg-[#2cb1bc] translate-x-[1rem] transition-all ease-in-out duration-200"
                : "translate-x-0 transition-all ease-in-out duration-200 w-[2.5rem] h-[0.2rem] bg-[#2cb1bc]"
            }
          ></span>
          <span className="w-[2.5rem] h-[0.2rem] bg-[#2cb1bc]"></span>
        </button>
        <div>
          <h3 className="logo-text text-[3.5rem]">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            <FaUserCircle />
            {user && user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
