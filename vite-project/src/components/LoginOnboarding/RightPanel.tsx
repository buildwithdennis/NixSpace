import { HiArrowLeft, HiArrowRight } from "react-icons/hi"

import GirlImage from "../../assets/Images/GirlImage.png";

const RightPanel = () => {
  return (
      <div className="relative w-full md:w-1/2 overflow-hidden">

          {/* ✅ FIXED: Image */}
          <img
            src={GirlImage}
            alt="Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-purple-700/60" />

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 py-6 flex items-end justify-between">
            <p className="text-white font-satoshi text-lg leading-relaxed max-w-[60%] opacity-90">
              Simplify project planning, streamline collaboration and boost
              productivity with your team workspace.
            </p>

            <div className="flex items-center gap-2">

  <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition">
    <HiArrowLeft size={18} />
  </button>

  <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition">
    <HiArrowRight size={18} />
  </button>

</div>
          </div>
        </div>
  )
}

export default RightPanel