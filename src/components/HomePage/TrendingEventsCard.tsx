import { LuArrowUpRight } from "react-icons/lu";
import { formatDate } from "../../lib/utils";
import {Link} from "react-router-dom"
type TrendingEventsCardProps = {
    image?:string,
    title?:string,
    date?:string
    description?:string
    time?:string
    id:string

}


const TrendingEventsCard = ({image,date,title,description,time,id}:TrendingEventsCardProps) => {
  return (
    <div className="overflow-hidden shadow-lg py-2 rounded-md">
            <img loading="lazy" className="w-full max-h-[200px] rounded-md"  src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-semibold mb-1">
                    <h3 className="text-[16px] md:text-[18px] ">{title}Sunset</h3>
                    <p className="text-[14px] md:text-[16px] font-normal">{`${formatDate(date!!)} - ${time}`}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-gray-700 text-sm md:text-base">
                        {description?.substring(0,100)}.
                    </p>
                    <div className="flex gap-1 items-center justify-start text-purple-800">
                        <Link to={`/description/${id}`} className='text-sm font-semibold '>View details</Link>
                        < LuArrowUpRight className='text-sm' />
                    </div>
                    </div>
            </div>
</div>
  )
}

export default TrendingEventsCard