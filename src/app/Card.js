import React ,{useRef}from 'react';
import ReactPlayer from 'react-player'

export default function Card({data, cardIndex}) {
    const playerRef = useRef(null);
    return(
        <div>
            {data[cardIndex].map(item => (
        <div className="card">
           {/* <p>{item.title}</p> */}
           {/* <p>{item.name}</p> */}
           <ReactPlayer ref={playerRef} url={item.url} controls={true} /><br/>
           <p style={{fontWeight:'bold', fontSize:30}}>{item.title}</p>
        </div>
            ))}
        </div>
    )
};

