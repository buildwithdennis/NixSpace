// === src/Pages/OnboardingPage.jsx ===


import RightPanel from "../components/LoginOnboarding/RightPanel";
import Leftpanel from "../components/LoginOnboarding/Leftpanel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const OnboardingPage = () => {
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
            title="What is the name of your team or
                    company?"
            description=" The name you choose should be recognizable by your team. This
                        would be your workspace."
            companyName={companyName}
            setCompanyName={setCompanyName}
            focused={focused}
            setFocused={setFocused}
            buttonOnClick={()=> navigate("/onboarding")}
            disabled={!companyName.trim()}
            inputTitle="Company / Team Name"
            variant="input"
        />
         

        {/* Right Panel */}
        <RightPanel />

      </div>
    </div>
  );
};

export default OnboardingPage;