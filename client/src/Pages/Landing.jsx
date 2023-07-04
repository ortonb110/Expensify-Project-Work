import { useEffect } from "react";
import logo from "../Assets/logo.png";
import heroImage from "../Assets/undraw_investing_re_bov7.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const user = localStorage.getItem("user"); //This code snippet will check to see if a user already logged in and if so redirects user to dashbaord

const Landing = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <main className="px-[2rem] md:px-[5rem] xl:px-[20rem] py-[2rem]">
      <nav className="mb-[20rem]">
        <h2 className="flex gap-2 items-center text-primaryColor font-bold">
          <img src={logo} alt="Expensify logo" />
          expensify
        </h2>
      </nav>
      <section className="grid lg:grid-cols-2 gap-2 xl:gap-4 items-center">
        <div className="md:w-[55rem] lg:w-[45rem] xl:w-full  h-fit">
          <h1 className="font-bold  lg:text-[4.9rem]">
            Expense <span className="text-primaryColor ">tracking</span> app
          </h1>
          <p className="text-justify text-primaryBodyColor text-[1.6rem] leading-[2.8rem] mb-[2rem]">
            Take control of your finances like never before with Expensify, the
            ultimate expense tracking app. Say goodbye to the hassle of manual
            tracking and endless spreadsheets, and embrace a seamless and
            effortless way to manage your expenses.
          </p>
          <Link to={"/register"} className="btn btn-default ">
            Login/Register
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={heroImage} alt="Landing page" />
        </div>
      </section>
    </main>
  );
};

export default Landing;
