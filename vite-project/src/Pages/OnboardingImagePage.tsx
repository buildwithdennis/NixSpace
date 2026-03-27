import { useState } from "react";
import Leftpanel from "../components/LoginOnboarding/Leftpanel"
import RightPanel from "../components/LoginOnboarding/RightPanel"
import { useNavigate } from "react-router-dom";

const OnboardingImagePage = () => {
        const [companyName, setCompanyName] = useState("");
    const [focused, setFocused] = useState(false);
    const navigate = useNavigate();

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
            title="Upload company or team logo"
            description="Add your company logo so you have a personalized feel on Nixspace."
            companyName={companyName}
            setCompanyName={setCompanyName}
            focused={focused}
            setFocused={setFocused}
            buttonOnClick={()=> navigate("/onboarding")}
            disabled={false}
            inputTitle="Your Company or team logo"
            variant="logo"
            showSkip={true}
        />
         

        {/* Right Panel */}
        <RightPanel />

        
      </div>
    </div>
  )
}

export default OnboardingImagePage