import React,{useState} from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>setCount(count+1);
    const decrement = () =>setCount(count - 1);


    return(
        <div>
            <p className="text-lg font-semibold">Count: {count}</p>  
<button onClick={increment} className="btn bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mr-2">  
  Increment  
</button>  
<button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">  
  Decrement  
</button>
        </div>
    );
};
export default Counter;