import React from 'react';
import { useParams } from "react-router-dom";
export const TodoItem = () => {
    const [data, setData] = React.useState([]);
    const { id } = useParams();
    React.useEffect(() => {
        getData();
    },[])
    const getData = () => {
        fetch(`http://localhost:3001/todos/${id}`).then(d=>d.json()).then(d=>setData(d))
    }
    // getData();
    console.log("data",data)
    return (
        <div>
        <div>item has fetched here-{id}</div>
        
            <div>{data.title}-{data.status}&ensp;<button>REMOVE</button>&emsp; <button>TOGGLE</button></div>
        </div>
    )
}