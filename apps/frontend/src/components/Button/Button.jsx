function Button({
  children,
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
      w-full
      rounded-2xl
      bg-[var(--primary)]
      py-3
      font-semibold
      text-white
      transition
      duration-200
      hover:bg-[#ff573c]
      hover:-translate-y-0.5
      hover:shadow-lg
      active:scale-[0.98]
      cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Button;