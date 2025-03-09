import { AddTaskModel } from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/Redux/features/Task/TaskSlice";
import { useAppSelector } from "@/Redux/hook";

const Task = () => {
  const task = useAppSelector(selectTask);

  console.log({ task });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-center py-5 text-2xl">Task</h1>
        <AddTaskModel></AddTaskModel>
      </div>
      <div>
        {task.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Task;
