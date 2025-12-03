import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;