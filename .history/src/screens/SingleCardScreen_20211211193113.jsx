import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const SingleCard = () => {
  const { title } = useParams();

  const test = useSelector((state) => state.test.list);


  let get_name = null;

  test.forEach((m) => {
    let get;

    for (let key in m) {
      get = m[key].surah_name_lang;
      get_name = get;
    }
  });

  const arrayed_list = [test, get_name];

  
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
