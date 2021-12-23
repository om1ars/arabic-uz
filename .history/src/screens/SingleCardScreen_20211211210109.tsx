import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();

  let num = number
  let shrunked_data:any ;
  data.map((d:any) => shrunked_data = d.data.surahs  )

  

  data.map((d: any) => d.data.surahs.filter((s:any) => console.log(s.number == num).map((d:any))
  ))



  
  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
