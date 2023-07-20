import { useAppContext } from "../Contexts/AppContext";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
const SmallSidebar = () => {
  const {logoutUser} = useAppContext();
  const [toggleLogout, setToggleLogOut] = useState(false);

  const logOut = () => {
    setToggleLogOut((prev) => !prev);
  };

  const { user, showToggle, toggleShow } = useAppContext();
  return (
    <div className="flex justify-between items-center">
      <button type="button" onClick={toggleShow}>
        {showToggle ? <GrClose /> : <GiHamburgerMenu />}
      </button>
      <h2 className="mb-0">Dashboard</h2>
      <button type="button" onClick={logOut} className="flex gap-2 items-center ">
        <FaUser />
        {user && user.name}
        <AiOutlineDown />
      </button>
      <button type="button" className={toggleLogout ? "block" : "hidden"} onClick={logoutUser}>
        logout
      </button>
    </div>
  );
};

export default SmallSidebar;
