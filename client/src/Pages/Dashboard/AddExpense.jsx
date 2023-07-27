import Wrapper from "../../Assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../Contexts/AppContext";
import { FormRow, Alert, FormRowSelect } from "../../Components/index";

const AddExpense = () => {
  const {
    displayAlert,
    handleChange,
    showAlert,
    isLoading,
    receiver,
    amount,
    description,
    addExpense,
  } = useAppContext();

  const method = ["Cash", "Mobile Money", "Online Payment"];
  const status = ["Paid", "Pending"];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!receiver || !amount || !description) {
      displayAlert();
      return;
    }

    addExpense();
  };

  const handleExpenseInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Add expense</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            labelText={"Purpose/Description"}
            name={"description"}
            handleChange={handleExpenseInput}
          />
          <FormRow
            labelText={"amount"}
            name={"amount"}
            handleChange={handleExpenseInput}
          />
          <FormRow
            labelText={"Paid to:"}
            name={"receiver"}
            handleChange={handleExpenseInput}
          />
          <FormRowSelect labelText={"Payment Method:"} list={method} />
          <FormRowSelect labelText={"Status:"} list={status} />
          {/* Btn Container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={onSubmitHandler}
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Add"}
            </button>
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log("Clicked!")}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddExpense;
