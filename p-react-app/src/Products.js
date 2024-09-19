import React from "react";
import { useParams, Link } from 'react-router-dom';

function Products() {
    const { categoryId } = useParams();

    const products = [
        { id: 1, name: '노트북', categoryId: '1' },
        { id: 2, name: '스마트폰', categoryId: '1' },
        { id: 3, name: '셔츠', categoryId: '2' },
        { id: 4, name: '청바지', categoryId: '2' },
        { id: 5, name: '사과', categoryId: '3' },
        { id: 6, name: '우유', categoryId: '3' },
    ];
    //배열의 카테고리Id와 useParam으로 넘긴 카테로리Id가 일치하는 요소만 배열로 반환
    const filteredProducts = products.filter(product => product.categoryId === categoryId);

    return (
        <div>
            <ul>
                {filteredProducts.map(products => (
                    <li key={products.id}>
                        <Link to={`/categories/${categoryId}/products/${products.id}`}>{products.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Products;




