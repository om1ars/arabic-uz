export const LOADING = "LOADING";
export const FAIL = "FAIL";
export const SUCCESS = "SUCCESS";



interface Loading {
  type: typeof LOADING;
}
interface Fail {
  type: typeof FAIL;
}
interface Success {
  type: typeof SUCCESS;
  payload: any
}
