import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"




const NavOptios = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
    console.log(window.location.hash);
    const [hashValue, setHashValue] = useState('');
   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 
   useEffect(() => {
    const handleHashChange = () => {
        const currentHash = window.location.hash;
        setHashValue(currentHash);
    };

    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
}, []);

   useEffect(() => {
    // const currentHash = window.location.hash;
    // setHashValue(currentHash);
    //  console.log(window.location.hash);
    if(window.location.hash === "/#miphones"){
        console.log("miphone");
        return   setMiPhoneToggle(true)
       }
     if(window.location.hash === "/#redmiphones"){
        return   setRedmiPhoneToggle(true)
       }
       if(window.location.hash === "/#tv"){
        return   setTvToggle(true)
       }
       if(window.location.hash === "/#laptops"){
        return   setLaptopToggle(true)
       }
       if(window.location.hash === "/#lifestyle"){
        return  setFitnessToggle(true)
       }
       if(window.location.hash === "/#home"){
        return  setHomeToggle(true)
       }
       if(window.location.hash === "/#audio"){
        return  setAudioToggle(true)
       }
       
       if(window.location.hash === "/#accessories"){
        return  setAccessoriesToggle(true)
       }

       
   }, [hashValue])

    return (
        console.log(m),
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
