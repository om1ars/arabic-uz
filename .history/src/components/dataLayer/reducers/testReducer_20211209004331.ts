interface DefaultStateI {
    laoding: booleantest,
    
}

const defaultState: DefaultStateI = {};

const testReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {
  return state;
};

export default testReducer;
