import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingleQuran } from "../components/dataLayer/slices/fetchSingleQuran";
import { RootState } from "../components/dataLayer/store";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();


  const d: any = useDispatch()
  const singleQuran = useSelector<RootState>(state => state.singleQuran.single)

  

  useEffect(() => {
    d(fetchSingleQuran(number))
  }, [])


  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
