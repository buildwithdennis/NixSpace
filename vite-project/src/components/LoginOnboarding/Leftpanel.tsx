
import Logo from "../../assets/Images/Logo.png";
import ButtonComponent from "../ButtonComponent";
import InputField from "../InputField";
import LogoUploader from "../LogoUploader";



type LeftPanelProps= {
    title: string,
    description: string,
    companyName?: string,
    setCompanyName?: (name: string) => void,
    focused: boolean,
    setFocused: (focused: boolean) => void
    buttonOnClick: () => void;
    disabled: boolean;
    inputTitle: string;
    variant?: "input" | "logo"; 
}

const Leftpanel = ({title, description, 
    companyName, setCompanyName = () => {}, 
    focused, setFocused, buttonOnClick,
     disabled, inputTitle, variant }:LeftPanelProps) => {
     
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
                {inputTitle}
              </label>
                 {variant === "input" && (
    <InputField
      companyName={companyName}
      setCompanyName={setCompanyName}
      focused={focused}
      setFocused={setFocused}
    />
  )}

  {variant === "logo" && (
    <LogoUploader />
  )}
</div>
          
           
      

            {/* CTA */}
           <ButtonComponent
            onClick={buttonOnClick}
            disabled={disabled}
           />
          </div>

          {/* Spacer */}
          <div />
        </div>
  )
}

export default Leftpanel