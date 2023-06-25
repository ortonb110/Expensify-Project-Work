const FormRow = ({data}) => {
  return (
    <div className="flex flex-col mb-[1.5rem]">
      <label htmlFor="name" className="capitalize cabin mb-[0.8rem]">email</label>
      <input
        type="text"
        name="name"
        placeholder="example@gmail.com"
        className="w-full text-[1.6rem] px-[1rem] cabin outline-none transition-all ease-in-out duration-100 focus:border-primaryColor border-[2px] rounded-lg bg-[#E8F0FE]"
      />
    </div>
  );
};

export default FormRow;
