import React,{useRef}from 'react';

import ReactPlayer from 'react-player';
export default function CourseJs(){

    const playerRef = useRef(null);
    return(
        <div className="container">
            <div className='video'>

            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=PlbupGCBV6w&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4'} controls={true} /><br/>
            </div>
            <div class="btn-group">
                <center>
                <button style={{width:'175px'}}>Review</button>
                <button style={{width:'175px'}}>Q&A</button>
                <button style={{width:'175px'}}>Notes</button>
                </center>
            </div><br/>
         
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=POPLF-Qc0OU&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&index=2'} controls={true} /><br/>
            
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=BxZKLKfjaRg&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&index=3'} controls={true} /><br/>
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=TOkU5HxES1o&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&index=4'} controls={true} /><br/>
            <ReactPlayer ref={playerRef} url={'https://www.youtube.com/watch?v=Wsy7nhFnfbM&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&index=5'} controls={true} /><br/>
            
            
        </div>
    )
};