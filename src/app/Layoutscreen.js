import React,{useState} from 'react';
import Card from './Card';
import DataLayout from './DataLayout';
import {useNavigate} from "react-router-dom";
export default function Layoutscreen() {
    const [active,setActive] = useState("SecondCard")
    const navigate = useNavigate();
    return( 
        
        <div className='Userscreen'>
            <nav>
            
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FirstCard")}>4.1 Simple Responsive Layout</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("SecondCard")}>4.2 Understanding Flexbox</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("ThirdCard")}>4.3 Layout with Flexbox</button><br/>
           
            </nav>
            
        
        <div>
            {active === "FirstCard" && <Card data={DataLayout} cardIndex={0} />}
            {active === "SecondCard" && <Card data={DataLayout}   cardIndex={1}/>}
            {active === "ThirdCard" && <Card data={DataLayout}  cardIndex={2} />}
            
           
        </div>
        </div> 
    )
};