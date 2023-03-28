import React from "react";
import { LoginContainer, LoginCard } from "./styled";
import { Input, Spacer, Button, Container } from "@nextui-org/react";
import { GoogleIcon } from "@/components/atoms/icons/Google";

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
            Login{" "}
          </Button>
          <Spacer y={1} />
        </form>
        <Container display='flex' justify='center' css={{ cursor: "pointer" }}>
          Or Login with <Spacer x={0.3} /> <GoogleIcon height={25} width={25} />
        </Container>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
