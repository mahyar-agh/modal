function Button({
  children,
  onClick,
  type = "outline",
  size = "md",
  className = "",
}) {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded focus:outline-none transition-all";
  const sizeStyle = {
    sm: "text-sm px-3 py1.5",
    md: "text-md px-4 py-2",
    lg: "text-lg px-5 px-3",
  };
  const typeStyles = {
    outline: "bg-transparent border border-white text-white",
    simple:
      "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:w-auto",
    danger:
      "w-full justify-center rounded-md bg-red-600 text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
  };

  const computetClassName = `
      ${baseStyle}
      ${sizeStyle[size]}
      ${typeStyles[type]}
      ${className}
    `.trim();

  return (
    <button onClick={onClick} className={computetClassName}>
      {children}
    </button>
  );
}

export default Button;
