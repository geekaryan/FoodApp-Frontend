// import { useParams } from "react-router-dom";
import Detail from "./Detail";

const Index = ({ data }) => {
  //   const params = useParams();
  return (
    <div>
      {/* {params.id} */}
      {/* {data.name} */}
      <Detail data={data} />
    </div>
  );
};

export default Index;
