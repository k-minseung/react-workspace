import React from "react";
import { Link, useParams } from "react-router-dom";

function Products () {
    const { categoryId } = useParams(); 

    const products = [
        { id: 1, name: '노트북', categoryId: '1' },
        { id: 2, name: '스마트폰', categoryId: '1' },
        { id: 3, name: '셔츠', categoryId: '2' },
        { id: 4, name: '청바지', categoryId: '2' },
        { id: 5, name: '사과', categoryId: '3' },
        { id: 6, name: '우유', categoryId: '3' },
        ];
        const filteredProducts = products.filter(product => product.categoryId === categoryId);

        return (
            <div>
                <h1>카테고리 {categoryId}의 상품 목록</h1>
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