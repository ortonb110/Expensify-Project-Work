
import logo from "../Assets/logo.png";
import heroImage from '../Assets/undraw_investing_re_bov7.svg';
const Landing = () => {
  return (
    <main className="px-[2rem] md:px-[5rem] xl:px-[20rem] py-[2rem]">
      <nav className="mb-[20rem]">
        <h2 className="flex gap-2 items-center text-primaryColor font-bold">
          <img src={logo} alt="Expensify logo" />
          expensify
        </h2>
      </nav>
      <section className="grid lg:grid-cols-2 gap-2 items-center">
        <div className="md:w-[55rem] space-y-12">
          <h1 className="font-bold  lg:text-[4.9rem]">Expense <span className="text-primaryColor ">tracking</span> app</h1>
          <p className="text-justify text-primaryBodyColor text-[1.6rem] leading-[2.8rem]">
            Take control of your finances like never before with Expensify,
            the ultimate expense tracking app. Say goodbye to the hassle of
            manual tracking and endless spreadsheets, and embrace a seamless and
            effortless way to manage your expenses.
          </p>
          <button className="btn">Login/Register</button>
        </div>
        <div className="hidden lg:block">
          <img src={heroImage} alt="Landing page" />
        </div>
      </section>
    </main>
  );
};

export default Landing;
