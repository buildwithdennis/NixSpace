
// === src/App.jsx ===
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnboardingPage from './Pages/OnboardingPage';
import OnboardingImagePage from './Pages/OnboardingImagePage';
import OnboardingNamePage from './Pages/OnboardingNamePage';

function App() {
  return (

        <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/onboarding" element={<OnboardingImagePage />} />
        <Route path="/onboarding-name" element={<OnboardingNamePage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App