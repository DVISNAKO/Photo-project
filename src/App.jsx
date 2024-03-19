import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./components/Routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <div>
          <Header />
          <AppRoutes/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
