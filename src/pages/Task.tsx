import { AddTaskModel } from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  selectFilter,
  updateFilter,
} from "@/Redux/features/Task/TaskSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";

const Task = () => {
  const task = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  console.log({ task });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-center py-5 text-2xl">Task</h1>
        <Tabs defaultValue="All" className="w-[400px]">
          <TabsList className="flex w-full">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("All"))}
              value="All"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Medium"))}
              value="Medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
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
