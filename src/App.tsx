import "./App.css";
import { Button } from "./components/ui/button";
import {
  decrement,
  increment,
  selectCount,
} from "./Redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hook";

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <div>
          <Button
            className="cursor-pointer"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <span style={{ padding: "20px" }}>{count}</span>
          <Button
            className="cursor-pointer"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
