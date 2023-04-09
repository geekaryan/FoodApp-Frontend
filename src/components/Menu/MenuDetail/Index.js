// import { useParams } from "react-router-dom";
import Detail from "./Detail";
import Feedback from "./Feedback";

const Index = ({ data }) => {
  //   const params = useParams();
  return (
    <div>
      {/* {params.id} */}
      {/* {data.name} */}
      <div>
        <Detail data={data} />
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
};

export default Index;
