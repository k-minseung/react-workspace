import React,{useContext, useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

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
        const post = boardList.find((item)=>item.id === parseInt(id))
        if(post){
            setPost(post)
        }else{
            alert('해당 게시글이 없습니다.')
        }
    },[])

    // const handleOnChange = (e) => {
    //     const{value,name} = e.target
    //     setPost((prevPost)=>({
    //         ...prevPost,
    //         [name]:value,
    //     }))
    // }

    const updatePost = (e) => {
        e.preventDefault();
        const newBoardList = boardList.map((item)=>{
            if(item.id === parseInt(id)){
                 return{...item,...post}
            }
            return item;
        })
        setBoardList(newBoardList)
        navigate("/post/"+id);
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