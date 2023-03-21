import React,{useState} from 'react';
import Card from './Card';
import DataHook from './DataHook';
import {useNavigate} from "react-router-dom";
export default function Hookscreen() {
    const [active,setActive] = useState("SecondCard")
    const navigate = useNavigate();
    return( 
        
        <div className='Userscreen'>
            <nav>
            
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FirstCard")}>5.1 TextInput and useState </button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("SecondCard")}>5.2 useEffect hook</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("ThirdCard")}>5.3 useReducer Hook</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FourthCard")}>5.4 useContext Hook</button><br/>
           
            </nav>
            
        
        <div>
            {active === "FirstCard" && <Card data={DataHook} cardIndex={0} />}
            {active === "SecondCard" && <Card data={DataHook}   cardIndex={1}/>}
            {active === "ThirdCard" && <Card data={DataHook}  cardIndex={2} />}
            {active === "FourthCard" && <Card data={DataHook}  cardIndex={3} />}
            
           
        </div>
        </div> 
    )
};