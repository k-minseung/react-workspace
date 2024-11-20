//메인화면(게시글 목록 보여주고 다른 화면으로 이동 가능)
import { useState, useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { Link } from "react-router-dom";
import "../css/BoardList.css"
import { useNavigate } from "react-router-dom";


const BoardList = () => {
  const {boardList,setBoardList} = useContext(BoardContext); //Context에서 boardList,setBoardList를 가져온다
  const [currentPage,setCurrentPage] = useState(1);          //현재 페이지 상태를 관리
  const[postsPerPage,setPostPerPage]= useState(3);           //한 페이지당 보여줄 게시물 수 관리
  const[totalPages,setTotalPages]=useState(1);               //전체 페이지를 관리

  const navigate = useNavigate(); // navigate 객체 생성


  //데이터를 다 불러오기
  useEffect(()=>{
    setBoardList(boardList)
    setTotalPages(Math.ceil(boardList.length/postsPerPage)) // 총페이지 수 계산
  },[postsPerPage,boardList])
  
  //현재 페이지에서 보여줄 게시글의 마지막 인덱스 계산
  const indexOfLastPost = currentPage * postsPerPage;

  //현재 페이지에서 보여줄 게시글의 첫번째 인데스 계산
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //현재 페이지에서 보여줄 게시글만 slice로 추출
  //ex) slice(0,3) 0이상 3미만
  const currentPosts = boardList.slice(indexOfFirstPost,indexOfLastPost);

  const pageinate = (pageNumber) => setCurrentPage(pageNumber)

  const handleWritePost = () =>{
    navigate('/write');
  }

  const handlePostPerPage = (e)=>{
    setPostPerPage(parseInt(e.target.value))
    setCurrentPage(1);
  }




  return(
    <div className="board-container">
      {/* 게시판제목 */}
      <h1 className="board-title">게시판</h1>

      {/* 글쓰기버튼 */}
      <div className="board-button">
        <button onClick={handleWritePost}>글쓰기</button>
      </div>

      {/* 게시글 목록 */}
      <ul className="board-posts">
        {currentPosts.map((board)=>(
          <li key={board.id} className="board-post-item">
            <Link to ={`/post/${board.id}`}>{board.title}</Link>
            <span>작성자 : {board.author}</span>
            <span> | 작성시간 : {board.writingTime}</span>
          </li>
        ))}
      </ul>

      {/* 페이지당 게시물 수를 선택하는 드롭다운 */}
      <div className="board-posts-per-page">
        <label>
          게시물 수 : {" "}
          <select value={postsPerPage} onChange={handlePostPerPage}>
            <option value={3}>3개</option>
            <option value={5}>5개</option>
            <option value={10}>10개</option>
          </select>
        </label>
      </div>

      {/* 페이지 목록 표시
            Array(totalPages) : 빈 배열 생성
            .keys() : 인덱스를 가지는 iterator객체를 반환받는다.
            [...] : iterator를 배열로 변환한다. */}
      <div className="board-pagination">
        {[...Array(totalPages).keys()].map((number)=>(
            <button
                key={number+1}
                onClick={()=>pageinate(number+1)}
                className={currentPage === number + 1 ? "selected" : ""}
            >{number+1}</button>
        ))}
      </div>
    </div>
  )
}

export default BoardList;