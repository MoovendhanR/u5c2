import {useEffect,useState} from "react";
// import axios from "axios";

export const AddStudent = () => {


    useEffect(() =>{
        return(()=>{
            console.log("add student unmounted");
        })
    },[]);
    const [form,setForm]=useState({
        "first_name":"",
        "last_name":"",
        "email":"",
        "male":false,
        "female":false,
        "age":"",
        "tenth_score":"",
        "twelth_score":"",
        "preferred_branch":""
    });
    const datachange=(e)=>{
        let {className,value,checked,type} = e.target;
    //     if(type=="checkbox" && className=="male"){
    //           if(checked){
    //               value=true;
    //           }else{
    //               value=false;
    //           }
    //     }
    //     if(type=="checkbox" && className=="female"){
    //         if(checked){
    //             value=true;
    //         }else{
    //             value=false;
    //         }
    //   }
    //   setForm({...form,[className]:value});
    //   console.log(form);
            setForm({...form,[className]:value});
    }
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     axios.post("http://localhost:8080/students",form).then(()=>{
    //         alert("datasubmitted")
    //     })
    // }
    const handleSubmit=async()=>{
        try{
              let res=await fetch("  http://localhost:8080/students",{
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(form)
              })
              let data = await res.json()
              console.log(data)
        }catch(err){
            console.log(err)
        }
    }


    return (
      <form className="addstudent" onSubmit={(e) =>{handleSubmit(e)}}>
        <div>
          Firstname:{" "}
          <input
        //    value={form.first_name}
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            onChange={datachange}
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
        //   value={form.last_name}
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
            onChange={datachange}
          />
        </div>
        <div>
          {" "}
          Email:
          <input
          value={form.email}
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
            onChange={datachange}
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
                // checked={form.male}
              name="gender"
              className="male"
              type="radio"
              value={"male"}
              onChange={datachange}
            />{" "}
            Female{" "}
            <input
                // checked={form.female}
              name="gender"
              className="female"
              type="radio"
              value={"female"}
              onChange={datachange}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
            // value={form.age}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
            onChange={datachange}
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
            //  value={form.twelth_score}
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
            onChange={datachange}
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
        //    value={form.twelth_score}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
            onChange={datachange}
          />{" "}
        </div>
        <div>
          <select
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
            onChange={datachange}
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" onClick={handleSubmit} />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };