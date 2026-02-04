import { useState } from "react";

export const Counter = (props) => {

    const {
        initValue
    } = props;

    const [count, setCount] = useState(initValue);

    const handleIncrease = () => {
        setCount(count +1);
    }
    
    const handleDecrease = () => {
        setCount(count -1);
    }


    return (
    <div>
        My counter now is: {count}
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    </div>
    )
}