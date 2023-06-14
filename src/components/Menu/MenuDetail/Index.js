// import { useParams } from "react-router-dom";
import Detail from "./Detail";
import Feedback from "./Feedback";

const Index = (props) => {
  //going to work with props soon as we are going to map accordingly to the redux
  //   const params = useParams();
  return (
    <div>
      {/* {params.id} */}
      {/* {data.name} */}
      <div>
        <Detail />
        {/* adding items here */}
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
};

export default Index;
