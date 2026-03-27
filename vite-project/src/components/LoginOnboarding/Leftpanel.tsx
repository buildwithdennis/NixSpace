import { useState } from "react";
import Logo from "../../assets/Images/Logo.png";
import ButtonComponent from "../ButtonComponent";


type LeftPanelProps= {
    title: string,
    description: string,
}

const Leftpanel = ({title, description}:LeftPanelProps) => {
     const [companyName, setCompanyName] = useState("");
      const [focused, setFocused] = useState(false);
  return (
       <div className="bg-white w-full md:w-1/2 flex flex-col justify-between p-8 md:p-10 sm:rounded-2xl">

          {/* ✅ FIXED: Logo */}
          <img src={Logo} alt="Logo" className="w-32 object-contain" />

          {/* Main Content */}
          <div className="flex flex-col gap-6 mt-10">
            <h1 className="text-2xl md:text-4xl font-satoshi-bold font-extrabold text-gray-900 leading-tight tracking-tight">
              {title }
            </h1>

            <p className="text-xl font-satoshi text-gray-500 leading-relaxed">
              {description}
            </p>

            {/* Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-satoshi-bold font-semibold uppercase tracking-widest">
                Company / Team Name
              </label>

              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="eg. Jacob Construction"
                className={`w-full px-4 py-3 rounded-lg border-2 text-sm text-gray-700 placeholder-gray-300 outline-none transition-all duration-200 ${
                  focused
                    ? "border-purple-500 shadow-md shadow-purple-100"
                    : "border-gray-200"
                }`}
              />
            </div>

            {/* CTA */}
           <ButtonComponent />
          </div>

          {/* Spacer */}
          <div />
        </div>
  )
}

export default Leftpanel