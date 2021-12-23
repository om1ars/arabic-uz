import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();


  const d = useDispatch()
  const singleQuran = useS

  
  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
