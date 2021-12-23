interface DefaultStateI {
    laoding: boolean,
    test?: any

}

const defaultState: DefaultStateI = {
    loading: false
};

const testReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {
  return state;
};

export default testReducer;
