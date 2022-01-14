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
    
    return (
        <div>
        <div>item has fetched here-{id}</div>
            <div>{data.title}-{data.status}</div>
        </div>
    )
}