import React,{useState,useEffect} from 'react';
import Card from './Card';
import DataList from './DataList';
import {useNavigate} from "react-router-dom";
export default function List() {
    const [active,setActive] = useState("SecondCard")
    useEffect(() => { localStorage. setItem('dataKey', JSON. stringify(active)); }, [active])
    const navigate = useNavigate();
    return( 
        
        <div className='List'>
            <nav>
            
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("FirstCard")}>2.1 List, ScrollView & RefreshControl</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("SecondCard")}>2.2 FlatList & SectionList with Nested Array</button><br/>
            <button style={{backgroundColor:'#e7e7e7',textalign:'center',borderRadius:'8px',padding:'5px',marginBottom:'20px'}} onClick={()=> setActive("ThirdCard")}>2.3 Quiz#1 - Challenge Yourself</button><br/>
            </nav>
        
        <div>
            {active === "FirstCard" && <Card data={DataList} cardIndex={0} />}
            {active === "SecondCard" && <Card data={DataList}  cardIndex={1}/>}
            {active === "ThirdCard" && <Card data={DataList} cardIndex={2} />}
           
        </div>
        </div> 
    )
};