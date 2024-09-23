const initialState = {
    todos : []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO' :
            return{ 
                ...state,
                todos : [...state.todos,{id:action.id,text:action.text}]
            }
        case 'REMOVE_TODO' :
            return{
                ...state,
                todos : state.todos.filter(todos => todos.id !== action.id)
            }
        default :
            return state;
    }
}

export default todoReducer;