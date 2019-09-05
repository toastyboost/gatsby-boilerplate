import styled from "styled-components";
import { Wrap } from "~/styles";

const Container = styled.div`
  font-size: 1.6rem;
  border: 1px solid var(--border-color);
  padding: 24px;
  margin: 24px;
`;

const Wrapper = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  width: 100%;
`;

const TextMerriweather = styled.div`
  font-family: var(--text-font);
  margin: 24px 0;
`;

const TextRoboto = styled.div`
  font-family: var(--main-font);
  margin-bottom: 24px;
`;

export { Container, Wrapper, Title, TextMerriweather, TextRoboto };
