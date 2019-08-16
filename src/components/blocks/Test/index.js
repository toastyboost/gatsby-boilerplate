import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Loader } from "~/components/atoms";
import { withUsers } from "~/store/hocs";

import { Container } from "./styles";

const Block = ({ getAllUsers, usersData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { data } = usersData;

  return (
    <Container>
      {data ? (
        data.map(({ id, email }, key) => (
          <div key={key}>
            {id}: {email}
          </div>
        ))
      ) : (
        <Loader />
      )}
    </Container>
  );
};

const Test = withUsers(Block);

export { Test };
