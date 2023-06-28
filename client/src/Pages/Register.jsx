import { useState } from "react";
import logo from "../Assets/logo.png";
import { FormRow, Alert } from "../Components";
import { useAppContext } from "../Contexts/AppContext";


const initialState = {
  isMember: true,
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert, registerUser, isLoading } = useAppContext();

  const toggleMenu = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    const { email, password, name, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
    }

    const currentUser = { email, password, name };

    if (!isMember) {
      registerUser(currentUser);
    } else {
      console.log("Something to come!");
    }
  };

  return (
    <main className="h-[100vh] flex justify-center items-center ">
      <div className="bg-white px-[4rem] border-[1px] py-[3.2rem] rounded-lg border-t-[5px] border-primaryColor w-[40rem]">
        <div className="flex flex-col items-center mb-[3rem]">
          <h2 className="flex gap-2 items-center text-primaryColor font-bold leading-[2.8rem]">
            <img src={logo} alt="Expensify logo" />
            expensify
          </h2>
          <p className="family text-[3.1rem] leading-[4.1rem] capitalize">
            {values.isMember ? "Login" : "Register"}
          </p>
          {showAlert && <Alert />}
        </div>
        <form className="" onSubmit={onsubmitHandler}>
          {values.isMember ? (
            ""
          ) : (
            <FormRow
              type="text"
              name="name"
              placeholder=""
              handleChange={handleChange}
              value={values.name}
            />
          )}
          <FormRow
            type="email"
            name="email"
            placeholder="example@gmail.com"
            handleChange={handleChange}
            value={values.email}
          />
          <FormRow
            type="password"
            name="password"
            handleChange={handleChange}
            value={values.password}
          />
          <button
            type="submit"
            className="btn btn-default w-full my-[2rem] text-[1.6rem]"
            disabled = {isLoading}
          >
            Login
          </button>
        </form>
        <div className="cabin text-[1.6rem] flex gap-2 items-center justify-center">
          <p>{values.isMember ? "Not a member yet?" : "Already a member?"}</p>
          <button className="text-primaryColor" onClick={toggleMenu}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Register;
