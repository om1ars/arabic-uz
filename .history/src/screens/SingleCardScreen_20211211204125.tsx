import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();

  let shrunked_data:any ;
  data.map((d:any) => shrunked_data = d.data.surahs  )

  // console.log(shrunked_data);
  

shrunked_data.filter((d:any) => d.number === number).map((d:any) => console.log(d)
)

  
  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
