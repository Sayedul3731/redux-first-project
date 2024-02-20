import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount , decrementByAmount} from "../redux/features/counter/counterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    return (
        <div>
            <div className=" text-center mt-20 space-y-5">
                <div>
                    <button
                        className="bg-green-500 px-2 font-semibold text-white text-2xl py-2"
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span className="mx-10 text-2xl bg-blue-500 px-2 text-white font-semibold ">{count}</span>
                    <button
                        className="bg-green-500 px-2 font-semibold text-white text-2xl py-2"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
                <div>
                    <button
                        className="bg-green-500 px-2 mr-5 font-semibold text-white text-2xl py-2"
                        aria-label="Increment value"
                        onClick={() => dispatch(incrementByAmount(5))}
                    >
                        Increment By 5
                    </button>
                    <button
                        className="bg-green-500 px-2 font-semibold text-white text-2xl py-2"
                        aria-label="Increment value"
                        onClick={() => dispatch(decrementByAmount(5))}
                    >
                        decrement By 5
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;