
import AddButton from "@/components/Buttons/AddButton";
import UsersList from "@/components/UsersList";
import Footer from "@/components/Footer";
import {Text} from "@radix-ui/themes";
import Nav from "@/components/Navbr"

export default async function Home() {
  return (
    <main className="w-full my-2 space-y-4 ">
      <Nav/>
      <div className="mx-4 flex justify-between">
        <Text size="3" weight="bold">Users</Text>
        <AddButton/>
      </div>
      <div className="bg-white drop-shadow-lg p-4" >
       <UsersList/>    
      </div>
      <Footer/>
      
    </main>
  );
}
