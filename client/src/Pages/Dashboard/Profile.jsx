import Wrapper from "../../Assets/wrappers/DashboardFormPage";
import FormRow from "../../Components/FormRow";
import { useAppContext } from "../../Contexts/AppContext";
import { Alert } from "../../Components/index";
import { useState } from "react";

const Profile = () => {
  const { isLoading, user, showAlert, displayAlert } = useAppContext();
  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !name || !lastName || !location) {
      displayAlert("Please provide all values!");
      return;
    }
  };

  return (
    <Wrapper>
      <form className="form">
        {showAlert && <Alert />}
        <h3>profile</h3>
        <div className="form-center">
          <FormRow labelText={"name"} value={name} type={"text"} />
          <FormRow labelText={"last name"} value={lastName} type={"text"} />
          <FormRow labelText={"email"} value={email} type={"email"} />
          <FormRow labelText={"location"} value={location} type={"text"} />
          <button
            type="submit"
            className="btn btn-block"
            onClick={onSubmitHandler}
          >
            {isLoading ? "please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
