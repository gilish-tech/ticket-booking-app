

type ButtonProps = {
    text:string,
    onClick?: ()=> void

}
const Button = ({text,onClick}:ButtonProps) => {
  return (
        <a className="flex justify-center items-center w-max text-sm cursor-pointer bg-purple-800 hover:bg-purple-800/80 text-white p-2 px-4 rounded-md"
          onClick={onClick}>{text}</a>
  )
}

export default Button
