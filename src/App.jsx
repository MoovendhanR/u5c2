import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents.jsx";
import {useState} from "react";
function App() {
  const [toggle,setToggle]=useState(true);
  return (
    <div className="App">
      <button className="togglebtn" onClick={() =>
       {
         setToggle(toggle ? false : true);
       }
      }>
        {toggle? "Add Students":"Show Students"}
      </button>
      { toggle? <ShowStudents/> :<AddStudent/>}
         {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;