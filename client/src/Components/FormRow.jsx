const FormRow = ({type, name, placeholder, handleChange, value}) => {
  return (
    <div className="flex flex-col mb-[1.5rem]">
      <label htmlFor={name} className="capitalize cabin mb-[0.8rem]">{name}</label>
      <input
      value={value}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full text-[1.6rem] px-[1rem] cabin outline-none transition-all ease-in-out duration-100 focus:border-primaryColor border-[2px] rounded-lg bg-[#E8F0FE]"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
