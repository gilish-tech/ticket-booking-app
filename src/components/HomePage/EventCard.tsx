

const EventCard = () => {
  return (
    <div className="overflow-hidden shadow-lg  rounded-md relative w-full ">
        <img loading="lazy" className="w-full rounded-md h-full object-fit"  src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="font-bold text-xl absolute z-10 text-white top-[50%] left-[50%]
        transform translate-x-[-50%] translate-y-[-50%]">Online Event</div>

    </div>
  )
}

export default EventCard