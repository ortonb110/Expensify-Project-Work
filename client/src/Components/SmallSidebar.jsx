import { useAppContext } from "../Contexts/AppContext";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
const SmallSidebar = () => {
  const { user, showToggle, toggleShow } = useAppContext();
  return (
    <div className="flex justify-between">
      <button type="button">
        {
            
        }
      </button>
      <h2>Dashboard</h2>
      <button type="button" onClick={toggleShow}>
        <FaUser />
        {
            user && user.name
        }
        <AiOutlineDown />
      </button>
      <button type="button" className={showToggle? 'block' : 'hidden'}>
        logout
      </button>
    </div>
  );
};

export default SmallSidebar;
