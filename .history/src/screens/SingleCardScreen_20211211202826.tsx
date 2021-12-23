import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any
}

export const SingleCard: React.FC<Props> = ({data}) => {

  const number = useParams() = data.number
  
  const Layer = () => {
    return (
      <p>
      </p>
    );
  };
  return <div>{<Layer />}</div>;
};
