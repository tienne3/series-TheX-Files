import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg03 from "~/assets/imgs/bg03.jpg";
import bg04 from "~/assets/imgs/bg04.jpg";
import ModalMore from "~/pages/Home/components/ModalMore";
import logo2 from "~/assets/imgs/logo2.png";
import HeaderTop from "~/components/HeaderTop";
import HeaderBot from "~/components/HeaderBot";

function HeaderFightTheFuture() {
  const [modalMore, setModalMore] = useState(false);

  // đóng, mở more modal
  const handleModalMore = () => {
    setModalMore(!modalMore);
  };

  // đóng login modal, more, deatils
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModalMore(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="sm:block">
      {/* background-Tablet, PC */}
      <div className="relative md:-top-[40px] md:min-h-[626px] lg:min-h-[695px] overflow-hidden z-10">
        {/* img mobile */}
        <img
          className="md:hidden object-fill z-10 w-full sm:h-[800px] sm:object-cover"
          alt="TheXFiles"
          src={bg04}
        />
        {/* img pc */}
        <img
          className="hidden md:block w-full object-cover relative z-0 md:min-h-[466px] lg:min-h-[555px] max-h-[720px]"
          alt="I Want To Believe"
          src={bg03}
        />

        {/* header top */}
        <div className="w-full absolute z-20 top-4 md:top-[54px] ">
          <HeaderTop />
        </div>
        {/* header mid */}
        <div className="px-5 w-full bottom-[248px] absolute z-10 md:mx-5 md:top-[133px] lg:top-[167px] xl:top-[204px] text-white">
          {/* logo */}
          <img src={logo2} alt="I Want To Believe" />
          {/* desc */}
          <p className="md:text-[14px] lg:text-[15px] mt-3 mb-2 lg:mb-3">
            <span className="mr-1 tracking-wider text-[14px]">
              FBI agents Mulder and Scully probe events that may prove the
              exis..
            </span>
            <button
              onClick={handleModalMore}
              className="text-[13px] md:text-[14px] font-semibold"
            >
              MORE
            </button>
          </p>
          <div>{modalMore && <ModalMore onClick={handleModalMore} />}</div>
          <p className="text-[14px] lg:text-[15px]">
            <span className=" font-semibold">Starring:</span>{" "}
            <span className="text-[14px] opacity-90 md:opacity-100">
              David Duchovny, Gillian Anderson, Billy Connolly
            </span>
          </p>
          <p className="text-[14px] lg:text-[15px] font-semibold mb-2">
            Director:
            <span className="mx-2 font-normal">Rob Bowman</span>
          </p>

          {/*  */}
          <div className="flex items-center">
            <p className="text-[14px] lg:text-[15px] font-semibold">
              PG-13:
              <span className="mx-2 font-normal">
                Thriller, Science Fiction, Horror, Movie - 1998
              </span>
            </p>

            <div className="xl:-mt-1 ml-2 flex items-center">
              <button className="px-[6px] bg-white text-black rounded border border-[#ccc] text-[10px] font-bold mr-2">
                5.1
              </button>
              <button className="px-[6px] bg-white text-black rounded border border-[#ccc] text-[10px] font-bold">
                HD
              </button>
            </div>
          </div>
          {/*  */}
          <p className="text-[14px] lg:text-[15px] xl:text-[16px] mt-4 font-medium">
            Add HBO Max™ to any Hulu plan for an additional $14.99/month.
          </p>
          {/* btn */}
          <div className="mt-[10px] mb-2 w-full flex justify-center md:justify-start">
            <Link
              to={"/payment"}
              className="text-[14px] w-full text-center md:w-[230px] pb-[10px] px-6 py-[9px] tracking-wider font-bold rounded bg-white hover:bg-[#ffffffCC] duration-300 text-[#040405]"
            >
              START YOUR FREE TRIAL
            </Link>
          </div>
          <p className="opacity-80 text-center md:text-start text-[12px] font-normal tracking-wider text-white">
            New subscribers only.
          </p>
        </div>

        {/* bg-gradient PC*/}
        <div className="hidden md:block">
          <div className=" absolute w-full top-0 min-h-[720px] bg-gradient-to-r from-blue-900"></div>
          <div className=" absolute opacity-100 w-full top-0 min-h-[720px] bg-gradient-to-r from-[#4ca4cf]/50 to-[#4ca4cf]/5"></div>
          <div className=" absolute opacity-90 -left-10 min-w-[2000px] top-0 h-[120px] blur-2xl bg-gradient-to-t from-black to-gray-800"></div>
        </div>

        {/* bg-gradient Mobile*/}
        <div className="md:hidden">
          <div className="absolute opacity-30 z-0 w-full top-0 bottom-0 bg-gradient-to-b from-black to-blue-500"></div>
          <div className="absolute opacity-60 z-0 w-full top-0 bottom-0 bg-gradient-to-t from-blue-900"></div>
          <div className="relative opacity-100 z-0 w-full top-0 h-[220px] bg-gradient-to-t from-blue-900 to-black"></div>
        </div>

        {/* header bot */}
        <div>
          <HeaderBot />
        </div>
      </div>
    </div>
  );
}

export default HeaderFightTheFuture;
