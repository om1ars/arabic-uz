import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();

  let shrunked_data:any ;
  data.map((d:any) => shrunked_data = d.data.surahs  )

  console.log(shrunked_data);
  

  shrunked_data.map((sh:any) => console.log(sh.number)
  )

  
  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
