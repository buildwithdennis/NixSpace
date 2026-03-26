// === src/Pages/OnboardingPage.jsx ===


import RightPanel from "../components/LoginOnboarding/RightPanel";
import Leftpanel from "../components/LoginOnboarding/Leftpanel";

const OnboardingPage = () => {
 

  return (
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">

    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
  
  <div className="
    w-full max-w-md 
    md:max-w-none md:w-full md:h-screen 
     overflow-hidden shadow-2xl 
    flex flex-col md:flex-row
  ">
      
      {/* Card */}
      {/* <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"> */}
        {/* <div className="w-full h-screen flex flex-col md:flex-row"> */}

        {/* Left Panel */}
        <Leftpanel />
     

        {/* Right Panel */}
        <RightPanel />

      </div>
    </div>
  );
};

export default OnboardingPage;