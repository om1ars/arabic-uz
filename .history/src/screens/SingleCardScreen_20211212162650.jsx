import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAudio } from "../components/dataLayer/slices/fetchAudio";
import { fetchSingleQuran } from "../components/dataLayer/slices/fetchSingleQuran";
import { fetchSingle } from "../components/dataLayer/slices/singleQuranSlice";
import { RootState } from "../components/dataLayer/store";

export const SingleCard = ({ data }) => {
  const { number } = useParams();
  const dispatch = useDispatch();
  const [selectorGet, setSelectorGet] = useState({})
  const singleQuran = useSelector((state) => state.singleQuran.single);
  const singleAudio = useSelector((state) => state.singleAudio.singleAudio);

  let get;

  singleAudio.map((d) => d.some((s) => s.number == number && {
    if(s.number == number) {
      get = s
      setSelectorGet(s)
    } 
  }));

  console.log(get);
  console.log(selectorGet);

  useEffect(() => {
    dispatch(fetchSingle(number));
  }, [dispatch, number]);

  useEffect(() => {
    dispatch(fetchAudio());
  }, [dispatch]);

  const Layer = () => {
    return (
      <p>
        {singleQuran.map((d) => {
          return <p>{d.text}</p>;
        })}
      </p>
    );
  };
  return <div>{<Layer />}</div>;
};
