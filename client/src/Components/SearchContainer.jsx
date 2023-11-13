import Wrapper from "../Assets/wrappers/SearchContainer";
import { useAppContext } from "../Contexts/AppContext";
import { FormRow, FormRowSelect } from ".";

const SearchContainer = () => {
  const {
    isLoading,
    searchDescription,
    paymentType,
    sortOptions,
    sort,
    searchStatus,
    clearFilters,
    handleChange,
    paymentMethod,
    statusOptions,
  } = useAppContext();

  const handleInputChange = (e) => {
    //if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h2>search form</h2>
        <div className="form-center">
          <FormRow
            type={"text"}
            name={"searchDescription"}
            value={searchDescription}
            labelText={"search"}
            handleChange={handleInputChange}
          />
          <FormRowSelect
            labelText={"payment type"}
            name={"paymentType"}
            value={paymentType}
            list={["all", ...paymentMethod]}
            handleChange={handleInputChange}
          />
          <FormRowSelect
            labelText={"status"}
            name={"searchStatus"}
            value={searchStatus}
            list={["all", ...statusOptions]}
            handleChange={handleInputChange}
          />
          <FormRowSelect
            labelText={"sort"}
            name={"sort"}
            value={sort}
            list={sortOptions}
            handleChange={handleInputChange}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={onSubmitHandler}
            disabled={isLoading}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
