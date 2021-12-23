import { DispatchTypes, FAIL, LOADING, SUCCESS } from "../actions/actionTypes";

interface DefaultStateI {
  loading: boolean;
  test?: any;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const testReducer = (
  state: DefaultStateI = defaultState,
  action: DispatchTypes
): DefaultStateI => {
    switch(action.type){
        case FAIL: 
        return {
            loading: false,
            // payload: 'S'
        }
        case LOADING: return {
            loading: true
        } 
        case SUCCESS: return {
            loading: false,
            
        }
    }
};

export default testReducer;
