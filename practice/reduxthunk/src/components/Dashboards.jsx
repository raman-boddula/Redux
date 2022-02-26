import React from 'react';
import { Button, Input,Empty, Pagination } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../Redux/Github/actions";

export const Dashboard = () => {
    const query = React.useRef({current : ""});
    const dispatch = useDispatch();
    const { data } = useSelector((state) => ({ data: state.githubReducer.data }));

    const handleSearch = () => {
        console.log(query.current.state.value)
        dispatch(getUserList(query.current.state.value, 1, 6));
    }
    const handlePageChange = (page,pageSize) => {
        dispatch(getUserList(query.current.state.value, page, pageSize));
    }
    return (
        <div>
            <div style={{ width: "30%", marginLeft: "35%" }}>
                <Input type="text" placeholder="Github profiles" ref={query} />
                <Button onClick={handleSearch}>Search</Button>
            </div>
            <div style={{display: 'grid',gridTemplateColumns : "repeat(4,23%)",gridGap:"1%",margin : "30px auto",}}>
                {data?.items ?  data.items.map((e) => {
                    return (
                        <div key={e.id} >
                            <a href={e.html_url} target="_blank" rel="noreferrer" >
                                <div style={{border:"4px solid cyan"}}><img src={e.avatar_url} alt="userimg" style={{width : "300px",height : "300px"}}></img></div>
                                <div>
                                    <h2>{e.login}</h2>
                                </div>
                            </a>
                        </div>
                    ) 
                }) : <div style={{ width: "360%", marginLeft: "35%" }}><Empty /></div>}
            </div>
            <div style={{textAlign: "center",paddingTop: "20px", paddingBottom: "40px"}} >
               {data?.items ? <Pagination  defaultCurrent={1} total={data.total_count} defaultPageSize={6} pageSize={6} onChange={handlePageChange}/>:null}
            </div>
        </div>
    )
}