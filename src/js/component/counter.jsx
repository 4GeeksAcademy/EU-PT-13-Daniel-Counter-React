import React, {useState, useEffect} from 'react';
import Changer from './changer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function Counter() {
    const[startTime, setStartTime] = useState(0)
    
    useEffect( () =>{
        setInterval(() => setStartTime(Seconds => Seconds + 1), 1000)
        
  
    },[])
       
   let spliting = ("0".repeat(6 - startTime.toString().length) + startTime.toString()).split("");
   
        let mapper = spliting.map((splitter) => 
                    <div className='col border border-1 border-secondary rounded-2 bg-light py-5 mx-2  text-center'>
                        <p className='display-1'><strong>{splitter}</strong></p>
                    </div>
        )
        console.log(mapper)
        
    return (
       
           <div className='col-7 mx-auto bg-dark border border-5 rounded-4 border-danger p-5 '>
                <div className='row'>    
                    <div className='col border border-1 border-secondary rounded-2 bg-light py-5 mx-2  text-center'>
                        <FontAwesomeIcon icon={faClock} size="8x"/>
                    </div>
                        {mapper}     
                </div>
            </div>
        
    )
}

export default Counter;
  
