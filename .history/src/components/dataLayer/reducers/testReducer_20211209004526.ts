import { DispatchTypes } from "../actions/actionTypes";

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
    switch()
};

export default testReducer;
