interface DefaultStateI {
    loading: boolean,
    test?: any

}

const defaultState: DefaultStateI = {
    loading: false
};

const testReducer = (state: DefaultStateI = defaultState, action: dispa): DefaultStateI => {
  return state;
};

export default testReducer;
