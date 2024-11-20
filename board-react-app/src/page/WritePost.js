import React, { useState,useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";



const WritePost =() =>{
    const navigate = useNavigate();
    const {boardList,setBoardList}=useContext(BoardContext);

    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('');
    const [content,setContent]=useState('');

    const savePost = (e)=> {
        e.preventDefault();

        const newPost = {
            id: boardList.length+1,
            title,
            author,
            content,
            writingTime:new Date().toISOString().slice(0,16).replace("T"," "), //현재시간
        };
        //새로운 게시글을 배열에 추가
        setBoardList([newPost, ...boardList]);

        //작성 후 메인화면으로 이동하기
        alert("게시물이 등록되었습니다.")
        navigate("/")
    }


    const BackToBoard = () => {
        navigate('/')
    }


    return(
        <div>
            <h1>글쓰기</h1>
           <form>
            <CustomInput label="제목" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <CustomInput label="작성자" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
            <CustomInput
                label="내용"
                multiline
                rows={6}
                value={content}
                onChange={(e)=>{setContent(e.target.value)}}
            />
           </form>
           <div>
            <CustomButton label="저장" onClick={savePost}/>
            <CustomButton label="취소" variant="outline" color="secondary" onClick={BackToBoard}/>
           </div>
        </div>
    );
}

export default WritePost;


