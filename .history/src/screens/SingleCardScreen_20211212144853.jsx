import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingleQuran } from "../components/dataLayer/slices/fetchSingleQuran";
import { fetchSingle } from "../components/dataLayer/slices/singleQuranSlice";
import { RootState } from "../components/dataLayer/store";



export const SingleCard = ({ data }) => {
  const { number }= useParams();



  const dispatch = useDispatch()
  const singleQuran = useSelector(state => state.singleQuran.single)

 console.log(singleQuran); 

  useEffect(() => {
    dispatch(fetchSingle(number))

  }, [dispatch, number])


  const Layer = () => {
    return <p>
      {
        singleQuran.map((d) => {
          return (
            <p></p>
          )
        })
      }
    </p>;
  };
  return <div>{<Layer />}</div>;
};
