import { selectFilter, selectTask } from "@/Redux/features/Task/TaskSlice";
import { useAppSelector } from "@/Redux/hook";

const Task = () => {
  const task = useAppSelector(selectTask);

  const filter = useAppSelector(selectFilter);

  console.log({ task });
  console.log({ filter });

  return <div>This is task page</div>;
};

export default Task;

