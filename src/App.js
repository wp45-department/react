import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  return (
<>
<Header title={"Prem Dudhrejiya"} searchbar={true}/>
<Todos/>
<Footer/>
</>
  );
}

export default App;
