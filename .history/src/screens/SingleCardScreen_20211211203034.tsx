import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();

  console.log(number);
 
  data.map((d: any) => )

  const Layer = () => {
    return <p></p>;
  };
  return <div>{<Layer />}</div>;
};
