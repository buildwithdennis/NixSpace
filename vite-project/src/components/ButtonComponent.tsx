import { HiArrowRight } from "react-icons/hi";
type buttonProps = {
    onClick: () => void;
    disabled?: boolean;
}
const ButtonComponent = ({ onClick, disabled }: buttonProps) => {
  return (
  <button 
  onClick={onClick}
  disabled={disabled}
  className={`w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700
   active:scale-95 text-white font-semibold text-lg tracking-wide
    transition-all duration-150 shadow-lg shadow-purple-200
     flex items-center justify-center gap-2 ${
      disabled ? "cursor-not-allowed opacity-50" : ""
     } `}>
  Continue
  <HiArrowRight />
</button>
  )
}

export default ButtonComponent