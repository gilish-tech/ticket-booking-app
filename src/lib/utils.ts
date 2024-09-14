import axios from "axios";
import { EventType, EventsWithPagesType } from "../types";


let allEventEndpoint = "https://rendezvous-events.onrender.com/events/" 
const descriptionEndpoint = "https://rendezvous-events.onrender.com/events/" 

export const getAllEvents = async(category:string,page:number)=>{

try {
      let reqEndpoint = ""
      let mapKey = "allEvents"
      if(page && page > 0){
         
         reqEndpoint = `${allEventEndpoint}?page=${page}`  
         
      }
      else if (category){
      console.log({category})
       reqEndpoint = `${allEventEndpoint}search/?category=${category.toLowerCase()}`  
       mapKey = "event"
       
      }else{
       reqEndpoint = descriptionEndpoint
      //  mapKey = "allEvents"
      }
        const response = await axios.get(reqEndpoint);

        console.log(response.data)
        const fullData: EventsWithPagesType =  {data:response.data["data"][mapKey], NumberOfPages: response.data.data?.noOfPages };
        return fullData
      

      } catch (error) {
          throw  error;
      }
}
export const getEventDescription = async(id:string)=>{
    try {
        const response = await axios.get(`${descriptionEndpoint}${id}` );
        const fullData:EventType =  response.data["data"]["event"];
        return fullData

      } catch (error) {
          throw  error;
      }
}


export function formatDate(dateString:string) {
    const date = new Date(dateString);
  
    // Correctly specify options with allowed values
    const options:Intl.DateTimeFormatOptions = { 
      weekday: 'long',  // 'long' will output the full name of the day (e.g., 'Sunday')
      month: 'long',    // 'long' will output the full name of the month (e.g., 'October')
      day: 'numeric'    // 'numeric' will output the day as a number (e.g., 3)
    };
    
    // Format the date according to the options
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  }
  
