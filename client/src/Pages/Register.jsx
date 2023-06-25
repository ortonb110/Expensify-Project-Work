import logo from "../Assets/logo.png";
import { FormRow } from "../Components";

const Register = () => {
  return (
    <main className="h-[100vh] flex justify-center items-center ">
      <div className="bg-white px-[4rem] py-[3.2rem] rounded-lg border-t-[5px] border-primaryColor w-[40rem]">
        <div className="flex flex-col items-center mb-[3rem]">
          <h2 className="flex gap-2 items-center text-primaryColor font-bold leading-[2.8rem]">
            <img src={logo} alt="Expensify logo" />
            expensify
          </h2>
          <p className="family text-[3.1rem] leading-[4.1rem] capitalize">login</p>
        </div>
        <form className="">
          <FormRow/>
          <FormRow/>
          <button type="submit" className="btn btn-default w-full my-[2rem] text-[1.6rem]">Login</button>
        </form>
        <div className="cabin text-[1.6rem] flex gap-2 items-center justify-center">
          <p>Not a member yet?</p>
          <button className="text-primaryColor">Register</button>
        </div>
      </div>
    </main>
  );
};

export default Register;
