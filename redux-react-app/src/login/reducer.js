const initialState ={
    isLoggedIn : false,
    username:''
}
function loginReducer (state = initialState, action) {
    switch(action.type){
        case 'LOGIN' :
            return{
                ...state,
                isLoggedIn : true,
                username : action.username
        }
        case 'LOGOUT' : 
            return{
                ...state,
                isLoggedIn : false,
                username : ''
            }
        default : 
            return state;
    }
}

export default loginReducer;