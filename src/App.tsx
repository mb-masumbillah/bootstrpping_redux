import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";


function App() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* <div>
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
        </div> */}

        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
