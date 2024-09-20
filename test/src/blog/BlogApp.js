import React, { useState, useEffect } from "react";
import axios from 'axios'

function BlogApp(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPost,setNewPost] = useState({title:'',body:''})

    //게시물조회
    useEffect(()=>{
        const fetchPosts = async () =>{
            try{
                //axios는 데이터를 가져와서 바로 json으로 만들어준다.
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(response.data);
            } catch(err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        fetchPosts();
    },[])//useEffect

    return(
        <div>
            <h1>블로그 게시물</h1>
            {posts.map(post => (
                <div key={post.id} 
                     style={{border : '1px solid black', 
                             margin: '10px', 
                             padding : '10px'}}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button>삭제</button>
                </div>
            ))};
        </div>
    )
}

export default BlogApp