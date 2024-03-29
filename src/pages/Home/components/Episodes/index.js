import { memo, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addType } from "~/redux/addTypeSlice";

const seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function Episodes() {
  let seasonType = localStorage.getItem("typeStorage");
  const [showSelectSeason, setShowSelectSeason] = useState(false);
  const [films, setFilms] = useState([]);
  const [type, setType] = useState(seasonType || 1);

  const dispath = useDispatch();
  //
  useEffect(() => {
    AOS.init();
  }, []);

  // show select season
  const handleSelect = () => {
    setShowSelectSeason(!showSelectSeason);
  };

  // call api
  useEffect(() => {
    axios
      .get(`https://6303b2bc0de3cd918b3c60e9.mockapi.io/series/Season-/${type}`)
      .then((res) => {
        setFilms(res.data.items);
      });
  }, [type]);

  return (
    <div className="mt-10">
      <div>
        {/* btn season */}
        <div onClick={handleSelect} className="relative w-[280px]">
          <button className="z-50 mb-[50px] w-[280px] px-5 flex justify-between items-center h-[48px] bg-[#272C34] text-white text-[15px] rounded-md hover:bg-[#444548] duration-200">
            {`Season ${seasonType || 1}`}
            <span className="ml-10">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </button>

          {/* select season */}
          <div className="absolute z-50 top-full left-0 bg-[#15171A] w-[280px] text-white rounded-md max-h-[247px] overflow-hidden overflow-y-auto shadow-2xl">
            {showSelectSeason &&
              seasons.map((season) => (
                <ul key={season}>
                  <li className="w-full hover:bg-[#444548] rounded-md">
                    <button
                      onClick={() => {
                        setType(season);
                        const action = addType(season);
                        dispath(action);
                      }}
                      className="px-5 h-[44px] w-full text-start text-[15px]"
                      style={{
                        display: "",
                      }}
                    >
                      {`Season ${season}`}
                    </button>
                  </li>
                </ul>
              ))}
          </div>
        </div>

        {/* render film */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]">
          {films.map((film) => (
            <Link
              to={`/watch-film/tap-${film.number}`}
              key={film.number}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              <div className="relative">
                <img
                  className="z-10 w-full rounded-xl hover:brightness-75"
                  src={film.path}
                  alt={film.name}
                />
                <span className="absolute border-[4px] -top-[7px] -bottom-[7px] -left-[7px] z-0 -right-[7px] opacity-0 hover:opacity-100 hover:bg-[#000]/[20%] duration-300 rounded-[16px] border-[#888]"></span>
              </div>
              {/* film number */}
              <p className="text-[12px] text-[#272C34] font-medium tracking-wider pt-2 py-1">
                EPISODE {film.number}
              </p>
              {/* film name */}
              <p className="text-[14px] text-textColorPrimary font-semibold pb-1">
                {film.name}
              </p>
              {/* desc */}
              <p className="text-[13px] sm:text-[14px] text-textColorPrimary tracking-normal md:tracking-wide">
                {film.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Episodes);
// const total = 160
// const result = total - 25 -45
