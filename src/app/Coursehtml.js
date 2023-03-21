import React,{useRef}from 'react';
import ReactPlayer from 'react-player'
export default function Contact(){
    const playerRef = useRef(null);
    return(
        <div>
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=dD2EISBDjWM&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB'} controls={true} /><br/>
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=-USAeFpVf_A&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=2'} controls={true} /><br/>
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=i3GE-toQg-o&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=3'} controls={true} /><br/>
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=09oErCBjVns&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=4'} controls={true} /><br/>
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=wvR40su_XBM&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&index=5'} controls={true} /><br/>
            
        </div>
    )
};