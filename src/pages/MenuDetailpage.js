import { useLoaderData, json } from "react-router-dom";

import Menu from "./../components/Menu/MenuDetail/Index";
const MenuDetailpage = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div>
      <Menu data={data.data.menuItem} />
    </div>
  );
};

export default MenuDetailpage;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:7000/api/menu/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch detail" }, { status: 500 });
  } else {
    return response;
  }
}
