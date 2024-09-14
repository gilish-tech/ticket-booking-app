
import Navbar from '../components/HomePage/Navbar'
import DescriptionCard from '../components/description/DescriptionCard'
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import Button from '../components/global/Button';
import {useParams} from "react-router-dom"
import { formatDate, getEventDescription } from '../lib/utils';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/global/LoadingSpinner';



const DescriptionPage = () => {

  const { id } = useParams();

  const {isError,isLoading,data,error} = useQuery({
    queryKey:["eventsDescription",id],
    queryFn:()=>getEventDescription(id!)
  })

  if (isError){
    throw error
  }
  if (isLoading){
    return <LoadingSpinner/>
  }
 

  return (
    <div className='min-h-screen'>
       <div className="px-1 md:px-24 py-12 md:py-12 ">

        <Navbar/>
        <DescriptionCard image={data?.imageUrl || ""}/>

        <div className="flex flex-col gap-8 md:p-3 shadow-md mt-3">


            <section className="flex justify-between items-center ">
                <div className="flex flex-col gap-5 md:w-3/5 w-full items-center md:items-start md:justify-start bg-">
                    <h1 className='text-xl font-semibold'>{data?.title}</h1>
                    <div className="flex flex-col gap-2">
                      <div className="flex">
                        <div className="flex gap-3">
                            <div className="flex  items-center gap-2">
                                  <SlCalender className='text-purple-800 text-sm'/>
                                  <p className='text-xm text-gray-700 text-sm'>{formatDate(data?.date||"")}</p>
                            </div>
                            <div className="flex  items-center gap-2">
                                  <IoMdTime className='text-purple-800 text-sm'/>
                                  <p className='text-gray-700 text-sm'>{data?.time}</p>
                            </div>
                            <div className="flex"></div>


                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                          <CiLocationOn className='text-sm text-purple-800'/>
                          <p className='text-sm text-gray-700'>{data?.address}</p>
                          
                      </div>


                      <div className="flex gap-2 items-center">

                          <GoPerson className='text-sm text-purple-800'/>
                          <h1 className='text-sm text-gray-700'>{data?.organizer.name}</h1>

                      </div>

                    </div>
                </div>

                <div className="md:flex flex-col justify-end w-2/5 hidden">
                  <h1 className='text-md font-semibold'>Contact Organizers</h1>
                    <div className="flex gap-2">
                          <div className="p-1 w-max bg-purple-800 rounded-full">
                            <FaEnvelope className='text-sm text-white'/> 
                          </ div>
                          <div className="p-1 w-max bg-purple-800 rounded-md">
                            <FaEnvelope className='text-sm text-white'/> 
                          </ div>
                          <div className="p-1 w-max bg-purple-800 rounded-md">
                            <IoCamera className='text-sm text-white'/> 
                          </ div>

                    </div>
                </div>
                </section>


              <section className='flex flex-col md:flex-row  '>
                  <div className="flex flex-col gap-7 w-full md:w-3/5 ">
                    <div className="flex flex-col md:pr-8 ">
                        <h1 className='text-xl font-semibold text-center md:text-left'>Event Description</h1>
                        <p className='text-gray-700 text-sm text-center md:text-left w-full'>
                          {data?.description}
                        </p>
                      
                    </div>

                    <div className="flex flex-col gap-2">

                    <h1 className='text-xl font-semibold text-center md:text-left'>Total Pricing</h1>
                    <div className="flex gap-3 justify-center md:justify-start">
                      <div className="flex-col">
                         <h3 className='font-medium text-lg  text-center md:text-left'>Single</h3>
                         <h3 className='text-[16px] text-purple-800 font-normal md:text-left'>{data?.price === 0 ? "FREE" : `NGN ${data?.price}` }</h3>
                      </div>
                     
                      <div className="flex-col">
                         <h3 className='font-medium text-lg text-center'>Pair</h3>
                         <h3 className='text-[16px] text-purple-800 font-normal'>NGN 9,000</h3>
                      </div>
                                          

                    </div>
                    <div className="flex  justify-center md:justify-start">
                    <Button text='Buy Now'/>
                    </div>
                    </div>
                    
                  </div>

                 {/* direction */}

                 <div className="w-full md:w-2/5 mt-8 md:mt-0">
                    <h1 className='text-xl font-semibold text-center md:text-left'>Direction</h1>
                    <img src='/assets/map.PNG' className='w-full h-[200px] object-fit'/>
                 </div>

              </section>

        </div>



        </div>
    </div>
  )
}

export default DescriptionPage