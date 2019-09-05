import React, { useEffect } from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";

import { injectIntl as withTranslation } from "gatsby-plugin-intl";

import { Loader } from "~/components/atoms";
import { withUsers } from "~/store/hocs";

import { Container, Wrapper, Title, TextMerriweather, TextRoboto } from "./styles";

const Block = ({ getAllUsers, usersData, intl }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { data } = usersData;

  return (
    <Container>
      <Wrapper>
        <Title as="h1">{intl.formatMessage({ id: "hello" })}</Title>
        {data ? (
          data.map(({ id, email }, key) => (
            <div key={key}>
              {id}: {email}
            </div>
          ))
        ) : (
          <Loader />
        )}

        <TextMerriweather>
          While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing
          letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly
          found in humanist and serif types.
        </TextMerriweather>
        <TextRoboto>
          Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time,
          the font features friendly and open curves.
        </TextRoboto>
      </Wrapper>
    </Container>
  );
};

const Test = compose(
  withUsers,
  withTranslation
)(Block);

export { Test };
