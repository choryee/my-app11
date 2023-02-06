//이 store에 약션을 만들것. 18강

//import { act } from "react-dom/test-utils";

export const increase=()=>({type:"INCREMENT"});
export const decrease=()=>({type:"DECREMENT"});

//초기 상태 만들기
const initstate={
    number:1,
}

//액션의 결과를 걸러내는 것.
const reducer=(state=initstate, action)=>{
    switch(action.type){
        case "INCREMENT":
         return {number:state.number+1};
//위. 리턴되면 그걸 호출하는 쪽에서 받는게 아니라, 리턴되는 순간 UI가 변경됨.
        case  "DECREMENT":
         return  {number:state.number-1};  

         default: //그것도 아니면,
         return state;
    }
}

export default reducer;