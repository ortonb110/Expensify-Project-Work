import ExpenseInfo from "./ExpenseInfo";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../Contexts/AppContext";
import Wrapper from "../Assets/wrappers/Job";
const Expense = ({ description, createdAt, _id, amount, receiver }) => {
  let date = moment(createdAt);
  date = date.format("MM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{description.charAt(0)}</div>
        <div className="info">
          <h5>{description}</h5>
          <p>{amount}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <ExpenseInfo icon={<FaLocationArrow />} text={receiver} />
          <ExpenseInfo icon={<FaCalendarAlt />} text={date} />

          <div className={`status ${"interview"}`}>Paid</div>
        </div>
        <footer>
          <div className="actions">
            <Link to={"/add-job"} className="btn edit-btn">
              Edit
            </Link>
            <button type="button" className="btn delete-btn">
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Expense;
