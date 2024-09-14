

const FOOTER_LINKS = [
    {
      name : "Feature",
      links:[
        {
          name:"Events Discovery",
          path:"/"
        }
      ]
    },
    {
      name : "Company",
      links:[
        {
          name:"About Us",
          path:"/"
        },
        {
          name:"FAQs",
          path:"/"
        },
        {
          name:"Careers",
          path:"/"
        },
        {
          name:"Support",
          path:"/"
        },
      ]
    },
    {
      name : "Contact Us",
      links:[
        {
          name:"info@event.com",
          path:"/"
        },
        {
          name:"+234 178 291 9201",
          path:"/"
        },
        {
          name:"20 ajamokarema street Lagos oshodi off france road karamo",
          path:"/"
        },
      ]
    },
  ]




const Footer = () => {
  return (
  

      <div className="min-h-[200px] gap-4 bg-purple-900 flex justify-between flex-col p-5 md:flex-row">
         <div className="text-xl text-white font-bold w-1/2">
            <h1>rendezvous</h1>
            <p className='text-sm font-thin max-w-[250px]'>Your personal event sherpa creating Aweome one click at a time</p>
         </div>

        

         <div className="grid grid-cols-3 text-white w-full md:w-1/2">
            {
              FOOTER_LINKS.map((item,index)=>(
                 <div className="flex flex-col items-start w-full " key={index}>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    {
                      item.links.map((link,lIndex)=>(
                        <div className="text-sm flex flex-col gap-2" key={`a${lIndex}`}>
                            <p>{link.name}</p>
                        </div>
                      ))
                    }
                 </div>

              ))
            }
         </div>


          
      </div>


 
  )
}

export default Footer