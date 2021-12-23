import axios from "axios";
import { Dispatch } from "redux";
import { DispatchTypes, FAIL, LOADING } from "./actionTypes";

export const testAction = () => async(dispatch: Dispatch<DispatchTypes>) =>{
   try {
      dispatch({type: LOADING})

      const res = await axios('https://random-data-api.com/api/stripe/random_stripe').then
   } catch(e)  {
       dispatch({type: FAIL})
       
   }

}