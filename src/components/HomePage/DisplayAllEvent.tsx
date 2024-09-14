import React,{useState,useEffect} from 'react'
import TrendingEventsCard from './TrendingEventsCard'
import { getAllEvents } from '../../lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from "react-router-dom";
import {Link} from "react-router-dom"
import LoadingSpinner from '../global/LoadingSpinner';
import { EventType, EventsWithPagesType } from '../../types';

const NextButton = ({page,children,onClick,color}:{page:Number,children:React.ReactNode,onClick?:()=>void,color?:string})=>{

  return (
     <Link to={`/?page=${page}`} className={` flex items-center justify-center size-[40px] shadown-md f  ${color ? color : "bg-purple-300"} text-sm `} onClick={onClick}>{children}</Link>
  )
}

const DisplayAllEvent = ({filterVal}:{filterVal:string}) => {
    
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category") || "";
    
    const [currentPage, setCurrentPage ] = useState(1)
    const [filteredData , setFilteredData] = useState<EventType[]| undefined>()
    useEffect(()=>{
      setCurrentPage(0)

    },[selectedCategory])

    useEffect(()=>{
      const current = searchParams.get("page") || 1;
      setCurrentPage(Number(current))

    },[])

    

    const {isError,isLoading,data,error} = useQuery({
      queryKey:["events",selectedCategory,currentPage],
      queryFn:()=>getAllEvents(selectedCategory, Number(currentPage) )
    })
      useEffect(()=>{
         if(filterVal && data){
            const refinedData = data.data.filter((item)=>item.title.toLowerCase().includes(filterVal))
            setFilteredData(refinedData)
            console.log(filteredData)
         }else{
            setFilteredData(data?.data)
         }


      },[data,filterVal])
    
      if (isError){
        throw error
      }
      if (isLoading){
        return <LoadingSpinner/>
      }

     
     
    
  return (
    <>   
             <div className="flex col-span-2 md:col-span-3  gap-3">

                { 
                  Number(data?.NumberOfPages) > 1 &&
                  [...Array(+data?.NumberOfPages!)].map((_,index)=>(
                      <NextButton page={index + 1} color={index + 1  === currentPage ? "bg-purple-900" : ""} onClick={()=>setCurrentPage(index + 1)}  >{index + 1}</NextButton>
                    
                  ))
                }

        </div>
            
           {
              filteredData?.map((item)=>(
                  <TrendingEventsCard key={item.id} id={item.id} time={item.time} date={item.date} description={item.description} title={item.title} 
                     image={item.imageUrl} />
                  
              ))
           }

           {
             
           }

           
   </>
  )
}

export default DisplayAllEvent