import { useEffect } from "react"

function CustomBtn ({title , color}) {

    useEffect (() => {
        console.log("Compund Mounted");

        return () =>{
            console.log("Compound UnMounted");
            
        } 
        
    } , [] );
    return (
        <>

        <button style={{
            backgroundColor: color,
            color: "black",
            padding: "10px 15px",
            borderRadius: "20px",
        }}>{title}</button>


        </>
    )
}

export default CustomBtn