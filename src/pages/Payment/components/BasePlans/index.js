import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

function BasePlans({
  titleCol1,
  offerCol12,
  priceCol1,
  descCol1,
  btn,
  amount,
  titleCol2,
  priceCol2,
  descCol2,
  titleCol3,
  offerCol3,
  priceCol3,
  descCol3,
}) {
  return (
    <div className="mx-auto pb-[100px] mt-[50px] w-full auto-cols-[90%] sm:auto-cols-auto items-center grid gap-x-5 sm:gapx-10 lg:gap-x-0 lg:justify-center lg:flex grid-flow-col overflow-x-auto">
      {/* col 1 */}
      <div className="relative w-[330px] px-[30px] h-[420px] shadow-md bg-white">
        {/* title */}
        <p className="text-[20px] text-[#272C35] font-semibold mt-[55px]">
          {titleCol1}
        </p>

        {/* offer */}
        <p className="text-[17px] text-textGreen font-semibold mb-2 mt-5">
          {offerCol12}
        </p>

        {/* price */}
        <p className=" font-semibold text-[#272c35] text-[32px] flex items-center justify-center">
          {priceCol1}
          <span className="font-semibold text-[18px] ml-1 mt-1"> / month</span>
        </p>
        {/* desc */}
        <p className="pt-[10px] text-[#636E85] text-[14px] leading-5 tracking-wide">
          {descCol1}
        </p>
        {/* btn */}
        <Link to={"/register"}>
          <button className="absolute bottom-12 left-[30px] right-[30px] px-[30px] text-[16px] text-[#272C35] font-semibold tracking-wider border-[2px] rounded-md h-[48px] border-[#272C35]">
            {btn}
          </button>
        </Link>

        {/*  */}
        <div className="flex justify-center">
          <p className="text-[#272c35] text-[12px] flex items-center absolute -bottom-7">
            A few excluded shows play with ads.
            <img
              className="ml-1"
              src="https://signup.hulu.com/static/images/info-icon.svg"
              alt="!"
            />
          </p>
        </div>
      </div>

      {/* col 2 */}
      <div className="relative w-[330px] px-[30px] h-[455px] border-t-[4px] border-t-textGreen shadow-md bg-white ">
        <button className="text-white bg-textGreen rounded-full text-[12px] tracking-wider font-extrabold px-6 py-2 mt-7 mb-3">
          {amount}
        </button>
        {/* title */}
        <p className="text-[20px] text-[#272C35] font-semibold">{titleCol2}</p>

        {/* offer */}
        <p className="text-[17px] text-textGreen font-semibold mb-2 mt-5">
          {offerCol12}
        </p>

        {/* price */}
        <p className=" font-semibold text-[#272c35] text-[32px] flex items-center justify-center">
          {priceCol2}
          <span className="font-semibold text-[18px] ml-1 mt-1"> / month</span>
        </p>
        {/* desc */}
        <p className="pt-[10px] text-[#636E85] text-[14px] leading-5 tracking-wide">
          {descCol2}
        </p>
        {/* btn */}
        <Link to={"/register"}>
          <button className="absolute bottom-[65px] left-[30px] right-[30px] px-[30px] text-[16px] bg-[#272C35] text-white font-semibold tracking-wider border-[2px] rounded-md h-[48px] border-[#272C35]">
            {btn}
          </button>
        </Link>

        {/*  */}
        <div className="flex justify-center">
          <Link
            to={"#"}
            className="text-textBlue text-[15px] tracking-wide font-semibold absolute -bottom-20"
          >
            Looking for our student discount?
          </Link>
        </div>
      </div>

      {/* col 3 */}
      <div className="relative w-[330px] px-[30px] h-[420px] shadow-md bg-white">
        {/* title */}
        <p className="text-[20px] text-[#272C35] font-semibold mt-[55px]">
          {titleCol3}
        </p>

        {/* offer */}
        <p className="text-[17px] text-textGreen font-semibold mb-2 mt-5">
          {offerCol3}
        </p>

        {/* price */}
        <p className=" font-semibold text-[#272c35] text-[32px] flex items-center justify-center">
          {priceCol3}
          <span className="font-semibold text-[18px] ml-1 mt-1"> / month</span>
        </p>

        {/* desc */}
        <p className="pt-[10px] text-[#636E85] text-[14px] leading-5 tracking-wide">
          {descCol3}
        </p>

        {/* btn */}
        <Link to={"/register"}>
          <button className="absolute bottom-12 left-[30px] right-[30px] px-[30px] text-[16px] text-[#272C35] font-semibold tracking-wider border-[2px] rounded-md h-[48px] border-[#272C35]">
            {btn}
          </button>
        </Link>
        {/*  */}
        <div className="flex justify-center">
          <Link
            className="absolute bottom-4 text-textBlue text-[14px]"
            to={"#"}
          >
            Learn More
          </Link>
        </div>

        {/*  */}
        <div className="flex justify-center">
          <div className="flex flex-col absolute -bottom-12">
            <p className="text-[#272c35] text-[12px]">
              No free trial available.
            </p>

            <Link className="text-textBlue text-[13px]" to={"#"}>
              Terms Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

BasePlans.propTypes = {
  titleCol1: PropTypes.string,
  offerCol12: PropTypes.string,
  priceCol1: PropTypes.string,
  descCol1: PropTypes.string,
  btn: PropTypes.string,
  amount: PropTypes.string,
  titleCol2: PropTypes.string,
  priceCol2: PropTypes.string,
  descCol2: PropTypes.string,
  titleCol3: PropTypes.string,
  offerCol3: PropTypes.string,
  priceCol3: PropTypes.string,
  descCol3: PropTypes.string,
};
export default memo(BasePlans);
