import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any
}

export const SingleCard: React.FC = ({data: any}) => {
const {number} = useParams()

  
  const Layer = () => {
    return (
      <p>
      </p>
    );
  };
  return <div>{<Layer />}</div>;
};
