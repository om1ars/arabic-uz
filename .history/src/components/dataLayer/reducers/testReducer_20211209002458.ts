interface DefaultStateI {}

const defaultState: DefaultStateI = {};

const testReducer = (state: DefaultStateI, action: any): DefaultStateI => {
  return state;
};

export default testReducer;
