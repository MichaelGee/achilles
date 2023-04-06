import React from "react";
import { Navbar, Button, Avatar, Text } from "@nextui-org/react";
import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

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
  // get user picture from auth
  const user = auth.currentUser;
  const photoURL = user!.photoURL;
  const displayName = user!.displayName;

  return (
    <Navbar>
      <Navbar.Brand>
        <Avatar squared src={photoURL!} />
      </Navbar.Brand>
      <Navbar.Content>
        <Text>{displayName}</Text>
      </Navbar.Content>
      <Navbar.Content>
        <Button onClick={handleLogout} light color='error' auto>
          Logout
        </Button>
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
