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
  className={`w-full py-3 rounded-xl
   active:scale-95 text-white font-semibold text-lg tracking-wide
    transition-all duration-150 shadow-lg
     flex items-center justify-center gap-2 ${
      disabled ? "cursor-not-allowed bg-[#B9B9B9] opacity-50" : " bg-purple-600 hover:bg-purple-700  shadow-purple-200"
     } `}>
  Continue
  <HiArrowRight />
</button>
  )
}

export default ButtonComponent