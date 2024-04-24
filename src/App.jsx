import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./components/Routes/AppRoutes";
import { LanguageState } from "./utils/context";

function App() {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("languageStatus")) || true
  );

  const languageStatus = language;

  const toggleLanguage = () => {
    setLanguage(!language);
    localStorage.setItem("languageStatus", JSON.stringify(language));
  };

  const blockPhoto = (e) => {
    e.preventDefault();
  };

  return (
    <BrowserRouter>
      <LanguageState.Provider value={[language, setLanguage]}>
        <div className="flex flex-col h-screen">
          <div>
            <Header language={language} toggleLanguage={toggleLanguage} />
            <AppRoutes blockPhoto={blockPhoto}/>
          </div>
          <Footer />
        </div>
      </LanguageState.Provider>
    </BrowserRouter>
  );
}

export default App;
