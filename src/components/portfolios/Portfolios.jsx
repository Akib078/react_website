import { Gallery } from "./Gallery";
import { useEffect, useState } from "react";
import './portfolio.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init();
Aos.refresh();
function Portfolios() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(Gallery);
    setCollection([... new Set(Gallery.map((item)=> item.title))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = Gallery.filter((item)=> item.title == itemData);
    setData(filterData);
  }
  const handleButtonClick = (link) => {
    window.location.href = link;
  };
 

  return (
<body style={{marginTop:"200px"}} id="portfolio">
<div className="containerp">
    <h1 style={{color:"#f5c104", fontSize:"28px"}}>Graphics Design</h1>
    </div><br></br><br></br>
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(Gallery)}>Works</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer" >
          {
            data.map((item)=> <div  key={item.id} className="galleryItem" data-aos="zoom-in" data-aos-duration="1600"><img src={item.image } />
            </div> )
            
          }
        </div>
      </div>
    </div>
    </body>
  );
}

export default Portfolios;