export default function reducer(state, action) {
    switch(action.type) {
      case 'ADD_TODO':
      {  let item = {
          text: action.payload,
          completed: false,
          id: crypto.randomUUID() 
        };
  
        let newTodos = [...state, item];
        return newTodos
}
        case 'DELETE_TODO':{
          let newTodos = state.filter((item) => item.id !== action.payload);
        return newTodos
}
        case 'COMPLETE_TODO':{
          let newTodos = state.map((item) =>
          item.id === action.payload ? { ...item, completed: !item.completed } : item
        );
        return newTodos
        }
      default: 
        return state
    }
    
}