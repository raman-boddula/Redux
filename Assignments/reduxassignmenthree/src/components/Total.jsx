import React from "react";
import {TotalDiv} from "./Style"
export const Total = ({ data }) => {
    const [total, setTotal] = React.useState("");
    // console.log("inside Total", data)
    let trueCount = 0
    data.forEach((el) => {
        if (el.status === true) {
            trueCount++;
         }
    })
    return (
        <TotalDiv>
        <p>TOTAL TASKS  </p>
            <div>Completed Tasks :{trueCount} </div>
            <div>Incompleted Tasks :{data.length-trueCount} </div>
        </TotalDiv>
        
    )
}