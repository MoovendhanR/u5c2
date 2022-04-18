import axios from "axios";
import {useState,useEffect} from "react";


export const ShowStudents = () => {
  const [data,setData] = useState([]);

  const [loading,setLoading] = useState(true);

    useEffect(() => {
        getData()
        return (()=>{
            console.log("showstudents unmounted");
        })
    },[])

   const getData = () =>{
       axios.get(`http://localhost:8080/students`).then((res)=>{
           setData(res.data);
           setLoading(true);
       })
   }
  console.log(data)

  const sortage=()=>{
      data.sort(function(a,b){
          return a.age-b.age});
      setData([...data]);
      console.log("yes")
  }
  const sorting=()=>{
     if(value=="asc"){
        data.sort(function(a,b){
            return a.first_name-b.first_name;
            setData([...data])
        })
     }
     if(value=="dsc"){
        data.sort(function(a,b){
            return b.first_name-a.first_name;
            setData([...data])
        })
     }
  }

    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
              onChange={sorting}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort" onClick={sortage}>sort age</button>
        </div>
        <table className="table" border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.map((house,index)=>{
                return(
            <tr key={house.id} className="row">
              <td className="first_name">{house.first_name}</td>
              <td className="last_name">{house.last_name}</td>
              <td className="email">{house.email}</td>
              <td className="gender">{house.gender}</td>
              <td className="age">{house.age}</td>
              <td className="tenth_score">{house.tenth_score}</td>
              <td className="twelth_score">{house.twelth_score}</td>
              <td className="preferred_branch">{house.preferred_branch}</td>
            </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    );
  };