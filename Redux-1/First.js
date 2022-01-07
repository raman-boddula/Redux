class Store{
    constructor(reducer, init){
        this.store = reducer;
        this.state = init;
    }
    getState(){
        return this.state;
    }
    dispath(action) {
        this.state= reducer(this.state,action)   
    }
}


const reducer = (state, { type, payload }) => {
    
    switch (type) {
        case "INC_COUNT":
            return { ...state, counter: state.counter + payload }
            case "ADD_TODO":
                return {...state,todos:[...state.todos,payload]}
                case "DEC_COUNT":
                    return {...state,counter:state.counter-payload}
                    case "MUL_COUNT":
                        return {...state,counter:state.counter*payload}
                        case "DIV_COUNT":
                            return {...state,counter:state.counter/payload}
                            default: return state;
                        }
                    }
                    
                    const action = { type: "INC_COUNT", payload: 1 };
                    
                    const init = { counter: 10, todos:[]};
                    const store = new Store(reducer, init);
                    console.log(store)
                    console.log(store.getState())//10
                    let operations = ["INC_COUNT", "DEC_COUNT", "MUL_COUNT", "DIV_COUNT"];
operations.forEach((e) => {
    store.dispath({ type: {e}, payload: 10 });
    console.log(store.getState())
})
store.dispath({ type: "ADD_TODO", payload: {title:"Learn Redux",status:false }});
    console.log(store.getState())
