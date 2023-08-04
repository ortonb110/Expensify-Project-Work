import ExpenseInfo from "./ExpenseInfo";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import Wrapper from "../Assets/wrappers/Job";

const Expense = ({
  description,
  createdAt,
  _id,
  amount,
  receiver,
  payment,
  status,
}) => {
  let date = moment(createdAt);
  date = date.format("Do MM, YYYY");

  let priceFormatted = new Intl.NumberFormat("ha-GH", {
    style: "currency",
    currency: "GHC",
  }).format(amount);

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{description.charAt(0)}</div>
        <div className="info">
          <h5 className="text-[2rem]">{description}</h5>
          <p className="text-[1.8rem]">{priceFormatted}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <ExpenseInfo
            icon={<IoPersonCircleSharp className="w-[2rem] h-[2rem]" />}
            text={receiver}
          />
          <ExpenseInfo
            icon={<FaCalendarAlt className="w-[2rem] h-[2rem]" />}
            text={date}
          />
          <ExpenseInfo
            icon={<MdPayment className="w-[2rem] h-[2rem]" />}
            text={payment}
          />
          <div
            className={`status ${status === "Paid" ? "interview" : "pending"}`}
          >
            {status}
          </div>
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
