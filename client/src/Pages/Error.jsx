import notFound from "../Assets/undraw_page_not_found_re_e9o6.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main className="flex justify-center items-center flex-col gap-4 h-[100vh]">
      <img src={notFound} alt="Page not found" />
      <div className="text-center family space-y-2">
        <h2 className="capitalize text-[3.1rem] mb-0">ohh! page not found</h2>
        <p className="text-[1.6rem] text-primaryBodyColorLight">We can't seem to find the page you're looking for</p>
        <Link to={"/"} className="btn btn-error">back home</Link>
      </div>
    </main>
  );
};

export default Error;
