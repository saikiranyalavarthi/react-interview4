

import { useMemo,useState } from "react";



const UseMemo = () => {
    const[count,setCount]=useState(0);
const[number ]=useState(5);
// const Factorial=fact(number)
const Factorial=useMemo(()=>(fact(number)),[number])
    return(
        
        <div className="usememo">
            <h2 style={{color:"green",fontSize:"20px"}}>Factorial:{Factorial}</h2>
            <h1 style={{color:"red",fontSize:"20px"}}>from useMemo counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>memo counter</button>
        </div>
    )
}
const fact=(n)=>{
    let answer=1
    for(var i=n;i>=n;i--){
        answer=answer*i;
    }
    console.log("factotial function");
    return answer;
}

export default UseMemo;