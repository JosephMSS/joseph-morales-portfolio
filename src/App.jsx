import "./App.scss";
import { Navbar } from "./components";
import { About, Header, Skills, Work } from "./container";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <About />
    </div>
  );
}

export default App;
