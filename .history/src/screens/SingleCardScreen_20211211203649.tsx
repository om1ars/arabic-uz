import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();

  let shrunked_data ;
  data.map((d:any) => let = d.data.surahs)  )

data.map((d:any) => d.data.surahs.filter((d: any) => d.number === number).map((s: any) => console.log(s, 'hey')))
  
  const Layer = () => {
    return <p>
      log
    </p>;
  };
  return <div>{<Layer />}</div>;
};
