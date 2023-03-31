import { Loading } from "@nextui-org/react";
import React from "react";
import { LoaderContainer } from "./styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <Loading type='spinner' />
    </LoaderContainer>
  );
};

export default Loader;
