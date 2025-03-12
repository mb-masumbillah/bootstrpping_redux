
import AddUserModel from "@/components/module/tasks/AddUserModel";
import UserCard from "@/components/module/tasks/UserCard";
import { selectUser } from "@/Redux/features/User/UserSlice";
import { useAppSelector } from "@/Redux/hook";

const User = () => {
  const user = useAppSelector(selectUser);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-center py-5 text-2xl">User</h1>
        <AddUserModel></AddUserModel>
      </div>
      <div>
        {user.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default User;
