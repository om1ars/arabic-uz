import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../components/dataLayer/store";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();


  const d = useDispatch()
  const singleQuran = useSelector<RootState>(state => state.singleQuran.)

  
  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
