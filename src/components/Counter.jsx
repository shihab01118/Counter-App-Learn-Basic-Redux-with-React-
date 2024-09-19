import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-8 rounded border-purple-400">
        <p className="text-center text-2xl font-medium mb-3">{count}</p>
        <button onClick={() => dispatch(increment())} className="py-1.5 px-4 bg-green-700 rounded text-white">
          Increment
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="py-1.5 px-4 bg-sky-700 rounded text-white mx-2">
          Increment By 5
        </button>
        <button onClick={() => dispatch(decrement())} className="py-1.5 px-4 bg-red-700 rounded text-white">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
