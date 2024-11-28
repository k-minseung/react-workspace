// 메인 화면( 게시글 목록 보여주고, 다른화면으로 이동이 가능하다.)

import React,{useState, useEffect, useContext} from "react";
import { BoardContext } from "../context/BoardContext";
import { Link ,useNavigate} from "react-router-dom";
import '../css/BoardList.css'
import axios from "axios";

const BoardList = () => {
    const navigate = useNavigate();
    // context에서 boardList와 setBoardList를 가져온다.
    const {boardList,setBoardList} = useContext(BoardContext);

    // 현재 페이지 상태를 관리
    const [currentPage, setCurrentPage] = useState(1);

    // 한 페이지 당 보여줄 게시물 수 관리
    const [postsPerPage, setPostsPerPage] = useState (3);

    // 전체 페이지 수 관리
    const [totalPages, setTotalPages] = useState(5);

    const getBoardList = async() => {
        try {
            const response = await axios.get('http://localhost:9099/api/board/all');
            console.log(response.data)
            setBoardList(response.data.data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getBoardList();
        // setBoardList(boardList)
        // setTotalPages(Math.ceil(boardList.length / postsPerPage)) // 총 페이지 수 계산
    },[]);

    // 현재 페이지에서 보여줄 게시글의 마지막 인덱스 계산
    const indexOfLastPost = currentPage * postsPerPage;

    // 현재 페이지에서 보여줄 게시글의 첫 번째 인덱스 계산
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // 현재 페이지에서 보여줄 게시글만 slice로 추출
    const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 번호를 변경하는 함수
    const pageinate = (pageNumber) => setCurrentPage(pageNumber);

    const handleWritePost = () => {
        navigate('/write');
    }
    const handlePostsPerPage = (e) => {
        setPostsPerPage(e.target.value)
        setCurrentPage(1);
    }
    return(
        <div className="board-container">
            <h1>게시판</h1>
            <div className="board-button">
                <button onClick={handleWritePost}>글쓰기</button>
            </div>
            <br/>
            <ul className="board-posts">
                {boardList.length > 0 ? (currentPosts.map((board) => (
                    <li key={board.id} className="board-post-item">
                        <Link to={`/post/${board.id}`} 
                        state={{
                            title : board.title, 
                            author : board.author, 
                            writingTime : board.writingTime, 
                            content : board.content
                            }}>
                                {board.title}
                            </Link>
                        
                        <span>작성자: {board.author}</span>
                        <span>작성시간: {board.writingTime}</span>
                    </li>
                )))
                :(<p>게시글이 없습니다.</p>)
            }
            </ul>
            {/* 페이지당 게시물 수를 선택하는 드롭다운 */}
            <div className="board-posts-per-pages">
                <label>
                    게시물 수 :{" "}
                    <select value={postsPerPage} onChange={handlePostsPerPage}>
                        <option value={3}>3개</option>
                        <option value={5}>5개</option>
                        <option value={10}>10개</option>
                    </select>
                </label>
            </div>
            {/* 페이지 목록 표시 
                Arrays(totalPages) : 빈 배열 생성
                .keys() : 인덱스를 가지는 iterator 객체를 반환받는다.
                [... ] : iterator 를 배열로 변환한다.
            */}
            <div className="board-pagination">
                {[...Array(totalPages).keys()].map((number) => (
                    <button
                        key={number+1}
                        className={currentPage === number+1 ? "selected" : ""}
                        onClick={() => pageinate(number+1)}
                    >{number+1}</button>
                ))}
            </div>
        </div>
    )
}
export default BoardList;