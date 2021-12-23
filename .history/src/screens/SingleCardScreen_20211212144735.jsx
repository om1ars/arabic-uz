import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingleQuran } from "../components/dataLayer/slices/fetchSingleQuran";
import { fetchSingle } from "../components/dataLayer/slices/singleQuranSlice";
import { RootState } from "../components/dataLayer/store";



export const SingleCard = ({ data }) => {
  const { number }= useParams();

  console.log(number);


  const dispatch = useDispatch()
  const singleQuran = useSelector(state => state.singleQuran.single)

 console.log(singleQuran); 

  useEffect(() => {
    dispatch(fetchSingle(number))

  }, [dispatch])


  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
