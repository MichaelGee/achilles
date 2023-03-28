import React from "react";
import { LoginContainer, LoginCard } from "./styled";
import { Input, Spacer, Button, Container, Text } from "@nextui-org/react";
import { GoogleIcon } from "@/components/atoms/icons/Google";
import Link from "next/link";

const Login = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <h1>Login</h1>
        <Spacer y={1} />
        <form>
          <Input placeholder='Email' fullWidth />
          <Spacer y={1} />
          <Input placeholder='Password' fullWidth />
          <Spacer y={1} />
          <Button type='submit' auto={false} css={{ width: "100%" }}>
            {" "}
            Continue{" "}
          </Button>
          <Spacer y={1} />
        </form>

        <Container display='flex' justify='space-between' alignItems='center' wrap='nowrap' gap={0}>
          <Link href='/auth/signup'>
            <Text>Signup</Text>
          </Link>
          <Container display='flex' justify='flex-end' css={{ cursor: "pointer" }} gap={0}>
            <Text>Or Login with</Text> <Spacer x={0.3} /> <GoogleIcon height={25} width={25} />
          </Container>
        </Container>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
