import { HiArrowRight } from "react-icons/hi";

const ButtonComponent = () => {
  return (
  <button className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-semibold text-sm tracking-wide transition-all duration-150 shadow-lg shadow-purple-200 flex items-center justify-center gap-2">
  Continue
  <HiArrowRight />
</button>
  )
}

export default ButtonComponent