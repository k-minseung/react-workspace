import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return(
        <nav>
            {/* html의 <a></a>와 비슷한 역할을 한다. */}
            <Link to="/home">홈</Link><br/>
            <Link to="/about">소개</Link>
        </nav>
    )
}
export default Navbar;
