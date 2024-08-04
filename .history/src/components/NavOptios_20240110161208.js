import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"




const NavOptios = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
    console.log(miPhones);
    debugger;
    console.log(window.location.hash);
   const [miPhoneToggle, setMiPhoneToggle] = useState(true);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 

   useEffect(() => {
//     console.log(window.location.pathname);
    if(window.location.pathname === "/#miphones"){
        console.log("miphone");
        return   setMiPhoneToggle(true)
       }
     if(window.location.pathname === "/#redmiphones"){
        return   setRedmiPhoneToggle(true)
       }
       if(window.location.pathname === "/#tv"){
        return   setTvToggle(true)
       }
       if(window.location.pathname === "/#laptops"){
        return   setLaptopToggle(true)
       }
       if(window.location.pathname === "/#lifestyle"){
        return  setFitnessToggle(true)
       }
       if(window.location.pathname === "/#home"){
        return  setHomeToggle(true)
       }
       if(window.location.pathname === "/#audio"){
        return  setAudioToggle(true)
       }
       
       if(window.location.pathname === "/#accessories"){
        return  setAccessoriesToggle(true)
       }

       
   }, [window.location.hash])

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?   tv.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOptios
