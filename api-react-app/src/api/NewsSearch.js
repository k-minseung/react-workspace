import React,{useState} from "react";
import axios from "axios";

function NewsSearch (){

    const [query , setQuery] = useState('');
    const [result , setResult] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    const searchNews = () => {

        try {
            const response = axios.get('http://localhost:9090/api/news',{
                params:{query}
            })

            // 검색결과를 result 상태에 저장
            response.then(res =>setResult(res.data.items));
        } catch (error) {
            setError('뉴스 검색에 실패했습니다.')
        }
    }


    const handleSearch = (e) => {
        if(!query){
            alert('검색어를 입력하세요')
            return;
        }
        e.preventDefault();
        NewsSearch();
    }

    return(
        <div>
            <h1>네이버 뉴스 검색</h1>
            <form onSubmit={handleSearch}>
                <input type="text" 
                        value={query} 
                        onChange={(e)=>setQuery(e.target.value)} 
                        placeholder="검색어를 입력해주세요"
                />
                <button type="submit">검색</button>
            </form>

            <ul>
                {result.map((news)=>(
                    <li key={news.isbn}>
                        <img src={news.image} alt={news.title} />
                        <p>제목 : {news.title}</p>
                        <p>저자 : {news.link}</p>
                        <p>출판사 : {news.description}</p>
                    </li>
                ))}
            </ul>            
           
        </div>
    )
}
export default NewsSearch;