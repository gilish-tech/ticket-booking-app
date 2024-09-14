
const DescriptionCard = ({image}:{image:string}) => {
    return (
      
      <div className="overflow-hidden shadow-lg  rounded-md relative w-full h-[350px] ">
          <img className="w-full rounded-md h-full object-cover" loading="lazy" src={image} alt="Sunset in the mountains" />          
      </div>
    )
  }
  
  export default DescriptionCard