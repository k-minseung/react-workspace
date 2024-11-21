import React,{useState} from 'react';
import { BoardContext } from './context/BoardContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardList from './page/BoardList';
import WritePost from './page/WritePost';
import PostDetil from './page/PostDeteil';
import EditPost from './page/EditPost';

const App = () => {
    const [boardList, setBoardList] = useState([])

      return(
        <BoardContext.Provider value={{boardList, setBoardList}} >
          <Router>
            <Routes>
              <Route path='/' element={<BoardList/>} />
              <Route path='/write' element={<WritePost/>} />
              <Route path='/post/:id' element={<PostDetil/>} />
              <Route path='/edit/:id' element={<EditPost/>} />
            </Routes>
          </Router>
        </BoardContext.Provider>
      )
}

export default App;