import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Placed.module.css";
import Navigation from "./../../Navigation/Index";
const Placed = () => {
    const navigate = useNavigate();

    const uid = useSelector((state) => state.user.uid);
    console.log(uid);

    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    

    useEffect(() => {
    const ApiHandler = async () => {
        try{
            const response = await fetch(`/api/user/${uid}`);
            if(!response.ok){
                console.log("Api is not working properly");
            }
            const data = await response.json();
            // console.log(data.data.orders[0].order);
            setData(data.data.orders[0].order);
            // totalPriceHandler();
        }catch (err) {
            console.log(err);
    
        }
    };
    ApiHandler();
}, []);
useEffect(()=> {
    const totalPriceHandler = () => {
        const arr = [];
        for(let i=0;i<data.length;i++){
            arr[i] = data[i].price;
        }
        let curr = 0;
        for(let i = 0;i<arr.length;i++){
        curr  += arr[i];
        }
        console.log("curr price is", curr);
        setTotalPrice(curr);
    }
    totalPriceHandler();
},[data])

let name = "";

const getItemNameHandler =  async (val) => {
    try{
        const response = await fetch(`/api/menu/${val}`);
        const data = await response.json();
        name = data.menuItem.name;
    }catch(er){
        console.log(er);
    }
   


}

    
    

    console.log(data);
    return(
        <div>
            <Navigation />
        <div className= {`mt-4 mr-4 ml-4 mb-4 ${styles.card}`}>
        <div className="text-center">
            <h1 className="font-mono text-[26px]">Your Orders</h1>
        </div>
        <div className="flex flex-col items-center mt-3">
         <div className="flex flex-col items-center">
         {data.map((order, orderIndex) => {
            return(
                <div  key={orderIndex} className="mb-6">
                    {order.items.map((item, index)=>(
                        <div key={index}>
                            <p>{item}</p>
                            <p>{order.quantity[index]}</p>
                            <p>{order.price[index]}</p>

                        </div>
                    ))}

                </div>
            )
           })}



           </div>
           <div className="mt-4 text-xl">
           <h1>Your total price is : {totalPrice}</h1> 
           </div>
           <div>
            <button onClick={() => navigate('/menu')}> Back to Menu </button>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Placed;