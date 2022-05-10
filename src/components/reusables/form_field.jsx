const FormField = (props) => {
  return (
    <div className="relative flex items-center text-gray-400 focus-within:text-primary mb-1">
      <props.icon className=" h-6  w-6 absolute ml-2  pointer-events-none" />
      <input
        type={props.type ?? "text"}
        placeholder={props.title}
        value={props.value ?? ""}
        onChange={props.onChange}
        className="w-full my-2 py-2 px-3 pl-12 rounded-lg border border-primary focus:border-0"
      />
    </div>
  );
};
export default FormField;
