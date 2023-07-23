import { useAppContext } from "../Contexts/AppContext";
import { FaUser } from "react-icons/fa";

import { AiOutlineDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import Wrapper from "../Assets/wrappers/SmallSidebar";
const SmallSidebar = () => {
  const { logOutUser } = useAppContext();
  const [toggleLogout, setToggleLogOut] = useState(false);

  const logOut = () => {
    setToggleLogOut((prev) => !prev);
  };

  const { user, showToggle, toggleShow } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showToggle ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <button type="button" onClick={toggleShow}>
          close
        </button>
        <h2 className="mb-0">Dashboard</h2>
        <button
          type="button"
          onClick={logOut}
          className="flex gap-2 items-center "
        >
          <FaUser />
          {user && user.name}
          <AiOutlineDown />
        </button>
        <button
          type="button"
          className={toggleLogout ? "block" : "hidden"}
          onClick={logOutUser}
        >
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
