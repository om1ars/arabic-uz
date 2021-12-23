export const LOADING = "LOADING";
export const FAIL = "FAIL";
export const SUCCESS = "SUCCESS";

export interface Loading {
  type: typeof LOADING;
}
export interface Fail {
  type: typeof FAIL;
}
export interface Success {
  type: typeof SUCCESS;
//   payload: any;
}

export type DispatchTypes = Fail | Success | Loading;
