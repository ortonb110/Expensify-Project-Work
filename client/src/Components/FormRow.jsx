const FormRow = ({
  type,
  name,
  placeholder,
  handleChange,
  value,
  labelText,
}) => {
  return (
    // flex flex-col mb-[1.5rem]
    <div className="form-row">
      <label htmlFor={name} className="form-label cabin mb-[0.8rem]">
        {labelText || name}
      </label>
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
