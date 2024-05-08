// import { display } from "@mui/system";
import React, { useState,useEffect} from "react";
import { conditions } from "../../conditions";
import DrugName from "../DrugName/DrugName";
import Navbar from '../Navbar1/Navbar';
import './Select1.css'
export default function Select1() {
  const [drug, setDrug] = useState("");
  const [RecommendMedi, setRecommendMedi] = useState("");
  const [holder, setHolder] = useState("");
  //  when input change drug change ,after selecting one condition drug 
  // should not change {for displaying Section }so i use shown drug which only changes on submit
  const [shownDrug, setshownDrug] = useState("")   
  let count=0; //just to set key
 
  // ****submit when user Enter a Name of condition
  const submit=(drug)=>{ 
    setDrug(drug); //seting drug
     setshownDrug(drug);    //setting shown drug
     setHolder(drug)
    // const a="https://prognodserver.hop.sh/predict/";  // api**?
    //  console.log(a+drug);
    const a="http://localhost:5000/predict/"  // local server not for deployment;
    fetch(a+drug)
    .then((res)=> res.json())
    .then((data)=>  display(data.drugs.drugName) );
    setDrug("");
    
  }
  // *****-Storeing the result, getting through API in RecommendMedi
  const display=(name)=>{
    setRecommendMedi(Object.values(name));
    // console.log("aman")
    // console.log(RecommendMedi.map((ele)=>{return ele}));

  }

  //////dom-----------------------
  // for recommendation section class change {visible};
  const [rec_vis, setrec_vis] = useState("searchRecommend");
  const [inp, setinp] = useState("inp-none");
  

  //useeffect so setrec can run properly -- on every input change it runs
  useEffect(() => {
    if(drug){
      setrec_vis("searchRecommend-vis");
      setinp("inp-vis");
    }
    else{
      setrec_vis("searchRecommend");
      setinp("inp-none");
  
    }
    console.log(drug);
  }, [drug]);

  
  return (
    <>
    <Navbar /> 
    <div className="my-app" style={{ backgroundImage: `url('/assets/images/s1.avif')`,backgroundSize: '100%' }}>
     <h2 className="text-2xl font-weight-bold text-center mb-3 text-primary">Start Navigating with CureCompass</h2>
     <div className="">
        
        <form className="max-w-md mx-auto ">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
       
        <div className="relative">
       
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={drug}  onChange={(e)=>{
          setDrug(e.target.value);
          setHolder(e.target.value);
          
          }} placeholder={ holder ? holder : 'Ex:Depression' } required />

          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>

        </div>
      </form>

        
        <div className={`max-w-md mx-auto ${rec_vis}`}>
        {drug && conditions.filter((ele) => ele.toLowerCase().startsWith(drug.toLowerCase())).map((ele) => (
    <div className="relative w-full" key={`name${count++}`} onClick={() => submit(ele)}>
        <div className="block w-full p-4 pl-12 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {ele}
        </div>
    </div>
))}
        </div>    
</div>
     <div className="container mt-3 Mediciens">
      <h2 className="text-2xl font-weight-bold text-center mb-3 text-primary">Medicine Recommendation</h2>

        {
          RecommendMedi===""? (<> <p className="text-xl font-weight-bold text-center mb-4 text-secondary">Your selected condition: None</p></>):
          (<><div className="information">

              <p className="text-xl font-weight-bold text-center mb-4 text-secondary">Diseases Chosen: {shownDrug}</p>


              {/* <p>Here are some Drugs that may be useful based on user reviews and ranked.</p> */}
            </div>
            <div className="list-group-item bg-light" style={{display:"flex", justifyContent:"center", alignContent:'center',height:'max-content',weight:'max-content'}}>

                {RecommendMedi.map((ele) => { return <DrugName key={ele} Name={ele}></DrugName>; })}
              </div></>

               
            )

        }
      </div>
    </div>
      



      
{/* **********displaying recommended drugs**--- */}
      
    </>
  );
}
