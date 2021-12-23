import { Dispatch } from "redux";
import { DispatchTypes, LOADING } from "./actionTypes";

export const testAction = () => async(dispatch: Dispatch<DispatchTypes>) =>{
   try {
      dispatch(action:{type: LOADING})
   } catch(e)  {
    console.log(e);
       
   }

}