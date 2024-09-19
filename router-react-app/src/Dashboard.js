import React from "react";
import {Routes,Route,Link} from "react-router-dom"
import Overview from "./Overview";
import Settings from "./Settings";

function Dashboard () {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="overview">개요</Link></li>
                    <li><Link to="settings">설정</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="overview" element={<Overview />}></Route>
                <Route path="settings" element={<Settings />}></Route>
            </Routes>
        </div>
    )
}
export default Dashboard;