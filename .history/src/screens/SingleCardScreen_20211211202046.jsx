import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const SingleCard = () => {
const {number} = useParams()

  
  const Layer = () => {
    return (
      <p>
        {arrayed_list[1] === title &&
          arrayed_list[0].map((d) => console.log(d))}
      </p>
    );
  };
  return <div>{<Layer />}</div>;
};
