import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { withUsers } from "~/store/hocs";
import { Container } from "./styles";

const Block = ({ getAllUsers, usersData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return <Container>{JSON.stringify(usersData)}</Container>;
};

const Test = withUsers(Block);

export { Test };
