import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any
  number: 
}

export const SingleCard: React.FC<Props> = ({data}) => {
const d = useParams()

  
  const Layer = () => {
    return (
      <p>
      </p>
    );
  };
  return <div>{<Layer />}</div>;
};
