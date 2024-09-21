import { LuArrowUpRight } from "react-icons/lu";
import { formatDate } from "../../lib/utils";
import {Link} from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
type TrendingEventsCardProps = {
    image:string,
    title:string,
    date:string
    description:string
    time:string
    id:string

}


const TrendingEventsCard = ({image,date,title,description,time,id}:TrendingEventsCardProps) => {
  return (
    <div className="overflow-hidden shadow-lg py-2 rounded-md">
            {/* <img loading="lazy" className="w-full max-h-[200px] rounded-md"  src={image} alt="Sunset in the mountains" /> */}
            <LazyLoadImage  effect="blur" wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
                style: {transitionDelay: "1s"},}} loading="lazy" wrapperClassName="w-full bg-gray-200"  className="w-full max-h-[200px] rounded-md bg-gray-200"  src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-semibold mb-1">
                    <h3 className="text-lg md:text-xl text-gray-800">{title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{`${formatDate(date!!)} - ${time}`}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-gray-700 text-sm md:text-base mb-4">
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