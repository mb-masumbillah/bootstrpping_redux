import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteState,
  toggleCompleteState,
} from "@/Redux/features/Task/TaskSlice";
import { useAppDispatch } from "@/Redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "High",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "Low",
            })}
          ></div>

          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>

        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteState(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2></Trash2>
          </Button>

          <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))} />
        </div>
      </div>
      <div>{task.assignedUser ? task.assignedUser : "not user"}</div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
