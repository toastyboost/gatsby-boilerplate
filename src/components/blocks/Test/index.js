import React, { useEffect } from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";

import { injectIntl } from "gatsby-plugin-intl";

import { Loader } from "~/components/atoms";
import { withUsers } from "~/store/hocs";

import { Container } from "./styles";

const Block = ({ getAllUsers, usersData, intl }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { data } = usersData;

  return (
    <Container>
      <h1>{intl.formatMessage({ id: "hello" })}</h1>
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

const Test = compose(
  withUsers,
  injectIntl
)(Block);

export { Test };
