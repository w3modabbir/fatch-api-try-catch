import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  let [datafatch, setdatafatch] = useState([]);

  useEffect(() =>{
    let data = async () =>{
      
      try {
        let linkurl = await axios.get('https://restcountries.com/v3.1/all')
        setdatafatch(linkurl.data)
      } catch(error){
        console.log(error.mesage);
      }
    }
    data()
    
  
  }, []);
  console.log(datafatch);
  return (
   <>
   <div className="container">
      {datafatch.map((item, index) => (
          <div key={index} className="item">
            <div>
              <h1>{item.name.common}</h1>
           
             <img src={item.flags.png} alt="" />
            </div>
          </div>
      ))}
    </div>
   </>
  )
}

export default App
