function Button({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="
      w-full
      rounded-2xl
      bg-[var(--primary)]
      py-3
      font-semibold
      text-white
      transition
      duration-200
      hover:-translate-y-0.5
      hover:shadow-lg
      active:scale-95
      cursor-pointer
      hover:bg-[#ff573c]
      active:scale-[0.98]
      "
    >
      {children}
    </button>
  );
}

export default Button;