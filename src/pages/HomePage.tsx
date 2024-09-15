import Navbar from "../components/HomePage/Navbar";
import { CiSearch } from "react-icons/ci";
import Button from "../components/global/Button";
import { LuArrowUpRight } from "react-icons/lu";
import EventCard from "../components/HomePage/EventCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useOptionStore } from "../store/optionsStore";
// import './App.css'

import DisplayAllEvent from "../components/HomePage/DisplayAllEvent";

function HomePage() {
  const data = useOptionStore((state) => state.data);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    console.log(selectedCategory);
    console.log(selectedOption);
    setInputValue("");
    const reqParams = ["All", "Categories"].includes(selectedOption)
      ? ""
      : selectedOption;
    reqParams ? navigate("/?category=" + reqParams) : navigate("/");
  };

  return (
    <div className="text-4xl   w-screen overflow-hidden ">
      <section
        className="landing-wrapper relative h-[400px] bg-opacity-50  bg-cover bg-center  w-full
          p-1 md:p-[50px]"
      >
        <Navbar />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5   relative top-[20%] lg:top-[50%]">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start ">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left text-white font-semibold leading-tight max-w-lg">
              Ready to Rock? Discover the hottest Events Here - YOur Calender's
              New Best Friend!
            </h3>
          </div>

          <div className="flex items-center bg-white px-4 py-3 w-full max-w-md gap-4 rounded-lg shadow-sm">
            {/* Search Input */}
            <div className="flex items-center gap-3 w-full">
              <CiSearch className="text-lg text-gray-400" />
              <input
                className="outline-none text-[15px] w-full px-2 py-1 bg-transparent"
                placeholder="Search for event"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                aria-label="Search for an event"
              />
            </div>

            {/* Divider */}
            <span className="text-gray-300">|</span>

            {/* Categories Select */}
            <div className="flex items-center gap-3">
              <select
                value={selectedOption}
                id="categories"
                className="bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded-lg outline-none text-[15px] focus:ring-2 focus:ring-blue-400"
                onChange={handleSelectChange}
                aria-label="Select event category"
              >
                <option>Categroies</option>
                {data?.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <Button text="Search" onClick={handleClick} />
          </div>
        </div>
      </section>

      <div className="flex flex-col  md:p-[50px] gap-4 ">
        <section className="flex flex-col w-full p-1">
          <div className="flex justify-between items-center px-4">
            <h1 className="text-[23px] mb-3 font-semibold">Trending events</h1>
            <div className="flex gap-1 items-center justify-center text-purple-800 text-base">
              <Link to={"/"} className=" font-semibold ">
                view all trending events
              </Link>
              <LuArrowUpRight />
            </div>
          </div>

          {/* card wrappe  */}
          <div className="grid grid-cols-2 md:grid-cols-3 space-x-3">
            <DisplayAllEvent filterVal={inputValue} />
          </div>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-3 md:flex-row gap-2 mb-10">
          <div className="flex flex-col gap-2 items-center ">
            <h1 className="text-center text-lg md:text-2xl font-semibold max-w-[300px] mt-5">
              Discover A World Of Events Tailored Just For you
            </h1>
            <Button text="View All Events" />
          </div>

          <div className="grid grid-cols-2  col-span-2 gap-3">
            <EventCard
              title="Online Events"
              image="https://expertshare.live/wp-content/uploads/2022/05/The-advantages-of-virtual-online-events-1.jpg"
            />
            <EventCard
              title="Physical Events"
              image="https://www.phy.cam.ac.uk/sites/www.phy.cam.ac.uk/files/styles/leading/public/winton_symposium_for_events_web_page.jpg?itok=iDUJgNR-"
            />
            <EventCard
              title="Hybrid Events"
              image="https://akcongress.com/blog/wp-content/uploads/2022/05/hybrid_conference_shutterstock_2017273616-1.jpg"
            />
            {/* <EventCard image="" title=''/> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
