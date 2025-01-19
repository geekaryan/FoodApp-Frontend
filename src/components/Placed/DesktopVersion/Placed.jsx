import { useEffect, useState } from "react";
import styles from "./Placed.module.css";
import Navigation from "./../../Navigation/Index";
const Placed = () => {

    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    

    useEffect(() => {
    const ApiHandler = async () => {
        try{
            const response = await fetch('/api/user/64779317978af55880caabe7');
            if(!response.ok){
                console.log("Api is not working properly");
            }
            const data = await response.json();
            setData(data.data.orders);
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
    
    

    // console.log(data);
    return(
        <div>
            <Navigation />
        <div className= {`mt-4 mr-4 ml-4 mb-4 ${styles.card}`}>
        <div className="text-center">
            <h1 className="font-mono text-[26px]">Your Orders</h1>
        </div>
        <div className="flex flex-col items-center mt-3">
           <div className="flex flex-col items-center">
            {data.map((item) => {
                return(
                    <div className="bg-slate-100 pt-2 pr-4 pl-4 pb-2 mb-2" key={item.key}>
                      <h1 className="text-[18px]" >Your item is: {item.name}</h1> 
                      <h1 className="text-[18px]" >Your item price: {item.price}</h1> 
                    </div>
                )
            })}
           </div>
           <div className="mt-4 text-xl">
           <h1>Your total price is : {totalPrice}</h1> 
           </div>
           <div>
            <button> Back to Menu </button>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Placed;