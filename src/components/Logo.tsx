import { useNavigate } from "react-router-dom";
import logo from "@public/logo.svg";
import "@src/assets/global.css";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex cursor-pointer items-center justify-center gap-2"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="mb-1 w-6" />
        <h1 className="special-font text-blue-accent-400">MejaBelajar</h1>
      </div>
    </>
  );
};

export default Logo;
