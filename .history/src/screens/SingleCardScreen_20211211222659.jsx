import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingleQuran } from "../components/dataLayer/slices/fetchSingleQuran";
import { RootState } from "../components/dataLayer/store";



export const SingleCard = ({ data }) => {
  const { number }= useParams();


  const d= useDispatch()
  const singleQuran = useSelector(state => state.singleQuran.single)

 console.log(singleQuran); 

  useEffect(() => {
    d(fetchSingleQuran(6))
  }, [])


  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
