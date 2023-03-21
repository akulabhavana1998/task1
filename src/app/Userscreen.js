import React,{useState} from 'react';
import Card from './Card';
import DataNavigation from './DataNavigation';
import {useNavigate} from "react-router-dom";
export default function Userscreen() {
    const [active,setActive] = useState("SecondCard")
    const navigate = useNavigate();
    return( 
        
        <div className='Userscreen'>
            <nav>
            
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FirstCard")}>3.1 Button, Touchables & Pressable</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("SecondCard")}>3.2 React Navigation V5 - Stack Navigator</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("ThirdCard")}>3.3 React Navigation V5 - Tab Navigator - Material Tab at Bottom &Top</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FourthCard")}>3.4 React Navigation V5 - Drawer Navigation - Side Menu</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FivthCard")}>3.5 React Navigation V5 - Passing Data Between Screens</button><br/>
            </nav>
            
        
        <div>
            {active === "FirstCard" && <Card data={DataNavigation} cardIndex={0} />}
            {active === "SecondCard" && <Card data={DataNavigation}  cardIndex={1}/>}
            {active === "ThirdCard" && <Card data={DataNavigation} cardIndex={2} />}
            {active === "FourthCard" && <Card data={DataNavigation} cardIndex={3} />}
            {active === "FivthCard" && <Card data={DataNavigation} cardIndex={4} />}
           
        </div>
        </div> 
    )
};