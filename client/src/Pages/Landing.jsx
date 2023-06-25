import { Fragment } from "react";
import logo from "../Assets/logo.png";
import heroImage from '../Assets/undraw_investing_re_bov7.svg';
const Landing = () => {
  return (
    <Fragment>
      <nav>
        <h2 className="flex gap-2 items-center text-[#33b1bc] font-bold">
          <img src={logo} alt="Expensify logo" />
          expensify
        </h2>
      </nav>
      <section>
        <div>
          <h1>Expense tracking app</h1>
          <p>
            Take control of your finances like never before with Expensify,
            the ultimate expense tracking app. Say goodbye to the hassle of
            manual tracking and endless spreadsheets, and embrace a seamless and
            effortless way to manage your expenses.
          </p>
          <button>Login/Register</button>
        </div>
        <div>
          <img src={heroImage} alt="Landing page" />
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
