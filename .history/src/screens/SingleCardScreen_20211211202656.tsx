import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  da
}

export const SingleCard = ({data: any}) => {
const {number} = useParams()

  
  const Layer = () => {
    return (
      <p>
      </p>
    );
  };
  return <div>{<Layer />}</div>;
};
