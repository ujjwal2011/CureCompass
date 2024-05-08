import React ,{ useState,useEffect } from 'react'

import './DrugName.css'


// section for card of each drug and their info
export default function DrugName(props) {
  // need to create seprate variable because in useeffect usestate was not working {storing res data}
  const [Form, setForm] = useState(null);
  const [strenght, setstrenght] = useState(null);
  const [rout, setrout] = useState(null);
  const [produt, setprodut] = useState(null);
  const [brand, setbrand] = useState(null);
  
  ;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4ed4593c27mshc373108f3fe70fcp1d3bcfjsn5bd331a6289a',
      'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
    }
  };

  useEffect(()=>{
//  api for collecting information about drug
    fetch(`https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${props.Name}`, options)
	.then(response => response.json())
	.then((response )=>{
    // console.log(response);
    setForm(response[0].dosage_form);
    setstrenght(response[0].active_ingredients[0].strength);
    setbrand(response[0].brand_name)
    setprodut(response[0].product_type  )
    setrout(response[0].route[0])
   
  })
	.catch(err => console.error(err));

    



  },[ props.Name])
  

  return (

    // card html-----------
    <>
    
    <div className="card" style={{ backgroundImage: `url('/assets/images/s2.jpg')`, backgroundSize: '100%'  }}>
            <div className="card-front">
            <div className="mb-3 text-violet-900 N">
               {props.Name}
              </div>
                
            </div>
            <div className="card-back">
                
                <div className="mb-3 text-violet-900 name">{props.Name}</div>
                <ul className="list-group about">
                <li className="alert alert-info text-center">
                STRENGTH:   {strenght} 
                </li>
                <li className="alert alert-info text-center">
                DOSAGE_FORM:  {Form} 
                </li>
                <li className="alert alert-info text-center">
                ROUTE:   {rout} 
                </li>
                <li className="alert alert-info text-center">
                PRODUCT_TYPE:   {produt} 
                </li>
                <li className="alert alert-info text-center">
                BRAND_NAME:  {brand} 
                </li>
                    
                </ul>
                
            </div>
        </div>
   
    
    </>
  )
}