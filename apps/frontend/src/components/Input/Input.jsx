function Input({
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
      w-full
      rounded-2xl
      border
      border-[var(--border)]
      bg-white
      px-4
      py-3
      text-[var(--text)]
      placeholder:text-gray-400
      outline-none
      transition
      duration-200
      focus:border-[var(--primary)]
      focus:ring-4
      focus:ring-orange-100
      "
    />
  );
}

export default Input;