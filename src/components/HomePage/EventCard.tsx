type EvenTypeProps = {
  image:string,
  title:string
}



const EventCard = ({image , title}: EvenTypeProps) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-md relative w-full">
      <img 
        loading="lazy" 
        className="w-full rounded-md h-full object-cover" 
        src={image} 
        alt="Sunset in the mountains" 
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Dark overlay */}
      <div className="font-semibold text-xl absolute z-20 text-white top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        {title}
      </div>
    </div>
  )
}


export default EventCard