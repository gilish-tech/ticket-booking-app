
import Button from "../global/Button"
import {Link} from "react-router-dom"



const NAVLINKS = [
  {
    
    name:"Discover",
    path:"/"

  },
  {
    
    name:"About us",
    path:"/"

  },
  {
    
    name:"FAQs",
    path:"/"

  },
  {
    
    name:"Contact Us",
    path:"/"

  },
]





function Navbar() {
  return (
    <div className=" flex justify-between border-md bg-white/90 py-3 px-4 rounded-[10px] ">
        <Link to="/" className="text-2xl text-purple-800 font-semibold ">rendezvous</Link>
        <ul className="hidden md:flex items-center gap-2 text-sm text-purple-800 font-semibold">
          {
            NAVLINKS.map((link,index)=>(
                <li key={index}>{link.name}</li>

            ))
          }
        </ul>

        <div className="flex items-center justify-center gap-3">
            <a className="text-sm text-purple-600">Login</a>
            <Button text="SignUp"/>
        </div>
    </div>
  )
}

export default Navbar