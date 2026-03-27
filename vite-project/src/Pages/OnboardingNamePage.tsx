import { useState } from "react";
import Leftpanel from "../components/LoginOnboarding/Leftpanel";
import RightPanel from "../components/LoginOnboarding/RightPanel";
import { useNavigate } from "react-router-dom";

const OnboardingNamePage = () => {
          const [companyName, setCompanyName] = useState("");
        const [focused, setFocused] = useState(false);
        // const navigate = useNavigate();
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
  
  <div className="
    w-full max-w-md 
    md:max-w-none md:w-full md:h-screen 
     overflow-hidden shadow-2xl 
    flex flex-col md:flex-row
  ">
      
    

        {/* Left Panel */}
        <Leftpanel 
            title="What is your name?"
            description="The name you choose should be recognizable by your team. This allows your teammates"
            companyName={companyName}
            setCompanyName={setCompanyName}
            focused={focused}
            setFocused={setFocused}
            buttonOnClick={()=> {}}
            disabled={false}
            inputTitle="Your name"
            variant="input"
            inputplaceholder="Peter Quill"
        />
         

        {/* Right Panel */}
        <RightPanel />

        
      </div>
    </div>
  )
}

export default OnboardingNamePage