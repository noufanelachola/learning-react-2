import Info from "../components/Info";
import "./App.css";
import About from "../components/About";
import Interest from "../components/Interest";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="appContent">
      <Info/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  );
}

export default App;
