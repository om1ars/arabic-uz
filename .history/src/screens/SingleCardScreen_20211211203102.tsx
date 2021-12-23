import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();

  console.log(number);
 
  data.filter((d: any) => d.number === number  )

  const Layer = () => {
    return <p></p>;
  };
  return <div>{<Layer />}</div>;
};
