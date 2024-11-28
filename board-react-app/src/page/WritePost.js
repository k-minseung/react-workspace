import React, { useState,useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import axios from "axios";


const WritePost =() =>{
    const navigate = useNavigate();
    const {boardList,setBoardList}=useContext(BoardContext);

    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('');
    const [content,setContent]=useState('');

    const savePost = (e)=> {
        e.preventDefault();
        //id는 자동으로 생성 등록날짜는 서버측에서 가져오기 때문에 데이터를 보내지 않아도 된다.
        const newPost = {
            // id: boardList.length+1,
            title,
            author,
            content,
            // writingTime:new Date().toISOString().slice(0,16).replace("T"," "), //현재시간
        };
        //새로운 게시글을 배열에 추가
        // setBoardList([newPost, ...boardList]);

        //백엔드로 post요청
        const response = axios("http://localhost:9099/api/board/write",{
            headers:{
                "Content-Type" : "application/json"
            },
            data :JSON.stringify(newPost),
            method:'post',
        })
        console.log(response.data)
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


