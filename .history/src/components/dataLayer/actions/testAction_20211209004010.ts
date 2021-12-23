import axios from "axios";
import { Dispatch } from "redux";
import { DispatchTypes, LOADING } from "./actionTypes";

export const testAction = () => async(dispatch: Dispatch<DispatchTypes>) =>{
   try {
      dispatch({type: LOADING})

      const res = await axios
   } catch(e)  {
    console.log(e);
       
   }

}