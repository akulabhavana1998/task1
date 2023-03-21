import React,{useState} from 'react';
import Card from './Card';
import Data from './Data';
import {useNavigate} from "react-router-dom";
export default function Course() {
    const [active,setActive] = useState("SecondCard")
    const navigate = useNavigate();
    return( 
        
        <div className='Course'>
            <nav>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FirstCard")}>1. Introduction to React-Native</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=>navigate("/list")}>2. List Building with styles</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=>navigate("/userscreen")}>3. Navigating Users between screens</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=>navigate("/layoutscreen")}>4. Handling with layout</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=>navigate("/hookscreen")}>5. Using Hooks</button><br/>
            
           
            
            </nav>
        <br/>
        <div>
            {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
            {active === "SecondCard" && <Card data={Data}  cardIndex={1}/>}
            {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
            {active === "FourthCard" && <Card data={Data} cardIndex={3} />}
            {active === "FivthCard" && <Card data={Data} cardIndex={4} />}
        </div>
        </div> 
    )
};