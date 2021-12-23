interface DefaultStateI {}

const defaultState: DefaultStateI = {};

const testReducer = (state: DefaultStateI = defa, action: any): DefaultStateI => {
  return state;
};

export default testReducer;
