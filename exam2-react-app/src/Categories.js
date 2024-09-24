import React from "react";
import { Link } from "react-router-dom";


 function Categories () {
    const categories = [
        { id: 1, name: '전자제품' },
        { id: 2, name: '의류' },
        { id: 3, name: '식료품' },
        ];
    return(
        <div>
            <h1>카테고리 목록</h1>
            <ui>
                {categories.map(categories =>(
                    <li key={categories.id} style={{marginLeft: '20px'}}>
                        <Link to = {`/categories/${categories.id}`}>{categories.name}</Link>
                    </li>
                ))}
            </ui>
        </div>
    )
 }
 export default Categories;