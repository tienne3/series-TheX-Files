import { useState } from "react";
import { Link } from "react-router-dom";

function LoginModal(props) {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setvaluePassword] = useState("");

  const handleValueEmail = (e) => {
    setValueEmail(e.target.value.trim());
  };

  const handleValuePassword = (e) => {
    setvaluePassword(e.target.value.trim());
  };

  const handleHide = () => {
    props.onClick();
  };

  return (
    <div
      onClick={handleHide}
      className="modal text-semibold fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/[50%] "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-[90%] sm:w-[80%] md:w-[432px] h-[520px] md:h-[560px] lg:h-[600px] z-50 mx-auto my-auto mt-10 lg:mt-[60px] xl:mt-20 shadow-xl py-10 px-6 sm:px-7 md:px-7 lg:px-10"
      >
        <div
          onClick={handleHide}
          className="absolute cursor-pointer right-0 top-0 opacity-60 leading-[50px] text-[40px] md:text-[45px] font-thin px-5 text-black"
        >
          &times;
        </div>
        <h1 className="text-[24px] my-7 font-bold text-[#272C35]">Log In</h1>
        <form action="">
          {/* email */}
          <p className="text-[13px] text-[#636E85] tracking-wider font-semibold">
            EMAIL
          </p>
          <input
            value={valueEmail}
            type={"email"}
            onChange={handleValueEmail}
            className="mt-2 mb-4 md:mb-6 outline-none border border-[#000] w-full rounded px-3 md:px-5 py-2 md:py-[11px] font-normal text-black"
          />

          {/* passwork */}
          <p className="text-[13px] text-[#636E85] tracking-wider font-semibold">
            PASSWORD
          </p>
          <input
            value={valuePassword}
            onChange={handleValuePassword}
            type={"password"}
            className="mt-2 mb-4 md:mb-6 outline-none border border-[#000] w-full rounded px-3 md:px-5 py-2 md:py-[11px] font-normal text-black"
          />
        </form>

        <Link
          to={"#"}
          className="text-[#176EE1] text-[14px] font-normal tracking-wider"
        >
          Forgot your email or password?
        </Link>
        <br />
        <button
          style={
            valueEmail.length > 0 && valuePassword.length > 0
              ? { opacity: 1 }
              : {}
          }
          className="text-center text-white bg-[#040405] opacity-60 w-full rounded h-[48px] mt-8"
          type={"submit"}
        >
          LOG IN
        </button>
        <p className="text-[14px] tracking-wider mt-[45px] md:mt-[60px] lg:mt-[80px] text-center text-[#636E85] font-normal">
          Don't have an account?
          <br />
          <Link className="text-[#176EE1] ml-1" to={"/register"}>
            Start your free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
// style={
//   type === "Season 1" ? { backgroundColor: "" } : { display: "none" }
// }
export default LoginModal;