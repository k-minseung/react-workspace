import React,{useContext, useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import axios from "axios";

const EditPost = () => {
    const navigate = useNavigate();
    const {boardList,setBoardList}=useContext(BoardContext);

    const{id} = useParams();
    const[post,setPost] = useState({
        id:id,
        author:'',
        title:'',
        content:'',
    })

    const {author,title,content}= post;

    useEffect(()=>{
        const getBoardData = async () => {
            try {
                const response = await axios.get(`http://localhost:9099/api/board/get/${id}`);
                setBoard(response.data.data[0]);
            } catch (error) {
                console.log('Error fetching data:',error)
            }
        }
        
       getBoardData();
        // const post = boardList.find((item)=>item.id === parseInt(id))
        // if(post){
        //     setPost(post)
        // }else{
        //     alert('해당 게시글이 없습니다.')
        // }
    },[])

    const updatePost =async (e) => {
        const response =await axios(`http://localhost:9099/api/board/modify/${id}`,{
            headers:{
                "Content-Type" : "application/json"
            },
            data :JSON.stringify(post),
            method:'put',
        })
        if(response.data){
            alert('수정됨')
            navigate("/post/"+id);
        }else{
            alert('수정안됨')
        }
        
    }

    const backToPost = () => {
        navigate("/post/"+id)
    }

    
    return (
        <div>
           <h1>글 수정하기</h1>
           <CustomInput
                label="제목"
                value={title}
                onChange={(e)=>setPost((prevPost)=>({...prevPost, title:e.target.value}))} />
           <CustomInput
                label="작성자"
                value={author}
                onChange={(e)=>setPost((prevPost)=>({...prevPost, author:e.target.value}))} />
           <CustomInput
                label="내용"
                value={content}
                onChange={(e)=>setPost((prevPost)=>({...prevPost, content:e.target.value}))}
                multiline
                rows={6}
            />
            <div>
                <CustomButton label="수정 완료" onClick={updatePost} />
                <CustomButton label="취소" variant="outlined" color="secondary" onClick={backToPost} />
            </div>
        </div>
    )
}
export default EditPost;