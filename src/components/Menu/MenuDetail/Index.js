// import { useParams } from "react-router-dom";
import Detail from "./Detail";
import Feedback from "./Feedback";

const Index = (props) => {
  //going to work with props soon as we are going to map accordingly to the redux
  //   const params = useParams();
  console.log(props);
  console.log(props.data._id);
  return (
    <div>
      {/* {params.id} */}
      {/* {data.name} */}
      <div>
        <Detail
          id={props.data._id}
          price={props.data.price}
          title={props.data.name}
          description={props.data.description}
          rating={props.data.ratings}
        />
        {/* adding items here */}
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
};

export default Index;
