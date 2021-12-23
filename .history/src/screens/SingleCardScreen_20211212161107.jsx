import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAudio } from "../components/dataLayer/slices/fetchAudio";
import { fetchSingleQuran } from "../components/dataLayer/slices/fetchSingleQuran";
import { fetchSingle } from "../components/dataLayer/slices/singleQuranSlice";
import { RootState } from "../components/dataLayer/store";



export const SingleCard = ({ data }) => {
  const { number }= useParams();
  const dispatch = useDispatch()

  const singleAudio = useSelector(state => state.singleAudio.singleAudio)
  let get_single_audio;

  singleAudio.map((d) => d.some((s) => s.number == number  && (s)))

  console.log(get_single_audio);
  const singleQuran = useSelector(state => state.singleQuran.single)


  useEffect(() => {
    dispatch(fetchSingle(number))
  }, [dispatch, number])

  useEffect(() => {
    dispatch(fetchAudio())
  }, [dispatch])


  const Layer = () => {
    return <p>
      {
        singleQuran.map((d) => {
          return (
            <p>
    {d.text}
            </p>
          )
        })
      }
    </p>;
  };
  return <div>{<Layer />}</div>;
};
