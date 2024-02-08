import EditIcon from "@/components/icons/EditIcon";
import Link from "next/link";
import { Text, Box } from "@radix-ui/themes";
import UserStatusSwitch from "./UserStatusSwitch";

const UserCard = ({ user }) => {
  return (
    <Box className="w-full flex space-x-12 border-b border-custom-border justify-center items-center p-2 relative ">
      <UserStatusSwitch user={user} />

      <div className="flex-grow justify-start">
        <Text className="grey-900-color block mt-4" size="3" weight="medium">
          {user.firstName} {user.lastName}
        </Text>{" "}
        {/* Adjusted to use user prop */}
        <Text className="text-gray-500 block">{user.email}</Text>
      </div>

      <Box className="items-center">
        <Link href={`/editUser/${user.id}`}>
          <div className="badge badge-primary badge-outline badge-lg w-11 h-11 rounded-full">
            {" "}
            <EditIcon />
          </div>
        </Link>
      </Box>
    </Box>
  );
};

export default UserCard;
