import { useNavigate } from "react-router-dom";

function MultiButtons(){

    const navigate = useNavigate();

    const handleButtonClick = (event) => {

        const buttonId = event.target.id;
        
        switch(buttonId){

            case 'address' : 
                navigate('/Address');
                break;
                
            case 'bookSearch' :
                navigate('/search');
                break;

            case 'newsSearch' :
                navigate('/newsSearch');
                break;
            
        }
    }


    return (
        <div className="App">
            <button id="address" onClick={handleButtonClick}>
                주소찾기 api
            </button>
            <button id="bookSearch" onClick={handleButtonClick}>
                도서찾기 api
            </button>
            <button id="newsSearch" onClick={handleButtonClick}>
                뉴스검색 api
            </button>
        </div>
    );
}
export default MultiButtons;