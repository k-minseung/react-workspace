import React, {useState, useEffect} from "react";

function UserList(){
     const[posts,SetPosts] = useState([])

     const [loading, SetLoading] = useState(true) //로딩 상태 관리

     const [error, SetError] = useState(null) // 에러상태 관리

    useEffect(()=>{
        const UserData = async () =>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error('데이터 로딩 실패')
                }
                const data = await response.json()
                SetPosts(data);

            } catch (err) {
                SetError(err.message)
            } finally{
                SetLoading(false)
            }
        }

        UserData();
    },[])
    if(loading){
        return(<p>로딩중...</p>)
    }
    
    if(error){
        return <p>에러 발생 : {error}</p>
    }

    return(
        <div>
            <h1>User List</h1><hr/>
            <ul style={{listStyle:'none'}}>
                {posts.slice(0,10).map((post) => (
                    <li key={post.id}>
                        ♡  {post.name} ♡<br/>
                           {post.email}
                        <p>-------------------------------</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList
