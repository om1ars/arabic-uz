import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface Props {
  data: any;
}

export const SingleCard: React.FC<Props> = ({ data }) => {
  const { number }: any = useParams();

  let shrunked_data: any;
  data.map((d: any) => (shrunked_data = d.data.surahs));

  data.map((d: any) => d.data.surahs.map((s: any) => {
    if(s.number === number) {
      console.log('worked');
      
    } else console.log(s.number);
    
  }));

  const Layer = () => {
    return <p>log</p>;
  };
  return <div>{<Layer />}</div>;
};
