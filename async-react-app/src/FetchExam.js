import React, { useState, useEffect } from "react";


function FetchExam() {

    const [posts, SetPosts] = useState([]) // 데이터를 저장할 State를 만든다.

    const [loading, SetLoading] = useState(true) //로딩 상태 관리

    const [error, SetError] = useState(null) // 에러상태 관리

    useEffect(() => {
        // 비동기적으로 데이터 호출하기
        const fetchData = async () => {
            try {
                // jsonplaceholder로부터 얻어온 e데이터를 response에 저장
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                // response객체
                // 서버로부터 응답을 나타내는 객체
                // ok: HTTP상태 코드가 200~299 범위에 있을경우 true, 그렇지 않으면 false
                if (!response.ok) {
                    throw new Error('데이터를 불러오는데 실패했습니다.')
                }
                // 받아온 데이터를 json으로 변환.
                const data = await response.json()
                SetPosts(data); // 상태에 데이터를 저장

            } catch(err){
                SetError(err.message) // 로딩 상태를 완료로 설정
            }   finally{
                SetLoading(false)
            }
        }

        fetchData(); // 함수 호출
    },[]) // 컴포넌트가 처음 렌더링 될 때 한번만 실행

    // 로딩중일 때 보여줄 내요
    if(loading){
        return(<p>로딩중...</p>)
    }

    // 에러 발생시 보여줄 내용
    if(error){
        return <p>에러 발생 : {error}</p>
    }

    // 데이터를 성공적으로 불러왔을 때 보여줄 내용
    return(
      <div>
        <h1>게시글 목록</h1>
        <ul style={{listStyle :'none'}}>
            {/* posts.slice(0,10)는 posts배열에서 인데스 0번부터 9번까지의
            첫 10개의 게시글을 잘라서 새로운 배열에 반환한다. */}
            {posts.slice(0,10).map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
      </div>  
    )
}

export default FetchExam;
