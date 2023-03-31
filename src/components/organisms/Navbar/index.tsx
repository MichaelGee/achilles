import React from "react";
import { Navbar, Button, Avatar, Text } from "@nextui-org/react";
import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

//@ts-ignore
const Navigation = () => {
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/auth/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <Navbar>
      <Navbar.Brand>
        <Avatar squared src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
      </Navbar.Brand>
      {/* <Navbar.Content>
        <Text>{username}</Text>
      </Navbar.Content> */}
      {/* <Navbar.Content>
        <Text>Michael Gates</Text>
      </Navbar.Content> */}
      {/* <Navbar.Content>
        <Button onClick={handleLogout} light color='error' auto>
          Logout
        </Button>
      </Navbar.Content> */}
    </Navbar>
  );
};

export default Navigation;
