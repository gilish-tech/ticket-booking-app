
import Navbar from '../components/HomePage/Navbar'
import { CiSearch } from "react-icons/ci";
import Button from '../components/global/Button';
import { LuArrowUpRight } from "react-icons/lu";
import EventCard from '../components/HomePage/EventCard';
import { useSearchParams } from "react-router-dom";
import {useState} from "react"
import { useNavigate,Link } from 'react-router-dom';
import { useOptionStore } from '../store/optionsStore';
// import './App.css'

import DisplayAllEvent from '../components/HomePage/DisplayAllEvent';




function HomePage() {
    const data = useOptionStore((state)=>state.data);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category");
    const [inputValue, setInputValue] = useState("")
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      };

    const handleClick = () =>{
        console.log(selectedCategory)
        console.log(selectedOption)
        setInputValue("")
        const reqParams = ["All","Categories"].includes(selectedOption) ? "" : selectedOption
        reqParams ? navigate("/?category=" + reqParams) : navigate("/") 
    }

   
 

  return (
    <div className='text-4xl   w-screen overflow-hidden '>
          <section className="landing-wrapper relative h-[400px] bg-opacity-50  bg-cover bg-center  w-full
          p-1 md:p-[50px]">
              <Navbar/>

            <div className="flex flex-col md:flex-row items-center justify-between gap-5   relative top-[30%] md:top-[50%]">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start ">
                  <h3 className="text-xl text-center  text-white text-wrap w-1/2 md:w-[300px] font-semibold">
                        Ready to Rock? Discover the hottest Events Here - YOur Calender's New Best Friend!
                  </h3>
                </div>

                 <div className="flex  bg-white p-2 w-full md:w-max gap-5 rounded-lg">
                     <div className="flex items-center gap-2 ">
                          <CiSearch className='text-base'/>
                          <input className='outline-none text-[15px] ' placeholder='Search for an event' value={inputValue}
                            onChange={(e)=> setInputValue(e.target.value)}/>
                 
                      </div>
                      <div className="flex items-center justify-center gap-2">
                      <span className="font-thin text-gray-300">|</span>
                        <select value={selectedOption}  id="countries" className="bg-gray-50 border outline-none text-gray-900 p-2 text-xs rounded-lg  block w-max"
                           onChange={handleSelectChange}>
                            <option >Categroies</option>
                            <option >lalal</option>
                             {
                                data?.map((category,index)=>(
                                    <>
                                        <option key={index} value={category}>{category}</option>
                                    
                                    </>
                                ))
                             }
                        
                        </select>
                      </div>

                      <Button  text='Search' onClick={handleClick} />

                 </div>
            </div>

          </section>




          <div className="flex flex-col  md:p-[50px] gap-4 ">
              <section className='flex flex-col w-full p-1'>
                  <div className="flex justify-between items-center ">
                      <h1 className='text-xl font-semibold'>Trending events</h1>
                      <div className="flex gap-1 items-center justify-center text-purple-800">
                          <Link to={"/"} className='text-sm font-semibold '>view all trending events</Link>
                          < LuArrowUpRight className='text-sm' />
                      </div>
                  </div>
                    
                  {/* card wrappe  */}
                  <div className="grid grid-cols-2 md:grid-cols-3 space-x-3">
                      <DisplayAllEvent filterVal={inputValue}/>
                  </div>
              </section>



              <section className='w-full grid grid-cols-1 md:grid-cols-3 md:flex-row gap-2 mb-10'>
                  <div className="flex flex-col gap-2 items-center ">
                      <h1 className="text-center text-lg md:text-2xl font-semibold max-w-[300px] mt-5">Discover A World Of Events Tailored Just For you</h1>
                      <Button text='View All Events'/>
                  </div>

                  <div className="grid grid-cols-2  col-span-2 gap-3">
                     <EventCard/>
                     <EventCard/>
                     <EventCard/>
                     <EventCard/>
                  </div>

              </section>

          </div>





    </div>
  
  )
}

export default HomePage
