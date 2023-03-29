import React, { useState } from "react";
import { LoginContainer, LoginCard, ErrorMessage } from "./styled";
import { Input, Spacer, Button, Container, Text, Loading } from "@nextui-org/react";
import { GoogleIcon } from "@/components/atoms/icons/Google";
import Link from "next/link";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//@ts-ignore
import { Box } from "rebass";

type FormValues = {
  email: string;
  password: string;
};

const defaultValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string(),
});

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { control, formState, handleSubmit } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, isDirty, errors } = formState;

  const onSubmit = (data: FormValues) => {
    const { email, password } = data;

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...

        router.push("/chat");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
        setErrorMessage(errorMessage);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        router.push("/chat");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };

  return (
    <LoginContainer>
      <LoginCard>
        <h1>Login</h1>
        <Spacer y={1} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                type='text'
                size='lg'
                placeholder='Email'
                helperText={errors?.email?.message}
                status={errors?.email && "error"}
                fullWidth
                {...field}
              />
            )}
          />
          <Spacer y={1} />
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Input.Password
                size='lg'
                placeholder='Password'
                helperText={errors?.password?.message}
                status={errors?.password && "error"}
                fullWidth
                {...field}
              />
            )}
          />
          <Spacer y={1} />
          <Button type='submit' auto={false} size='lg' css={{ width: "100%" }}>
            {" "}
            {loading ? <Loading type='spinner' color='currentColor' size='md' /> : "Continue"}
          </Button>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Spacer y={1} />
        </form>

        <Container display='flex' justify='space-between' alignItems='center' wrap='nowrap' gap={0}>
          <Link href='/auth/signup'>
            <Text>Signup</Text>
          </Link>
          <Box
            display='flex'
            justifyContent='flex-end'
            style={{ cursor: "pointer" }}
            onClick={signInWithGoogle}>
            <Text>Or Login with</Text> <Spacer x={0.3} /> <GoogleIcon height={25} width={25} />
          </Box>
        </Container>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
