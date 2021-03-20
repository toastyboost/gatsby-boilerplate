import * as React from "react";
import styled from "styled-components";

type InputProps = {
  value: string;
  placeholder: string;
  isInvalid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  isInvalid,
  onChange,
}) => (
  <FieldContainer>
    <Field
      value={value}
      placeholder={placeholder}
      aria-invalid={isInvalid}
      onChange={onChange}
    />
  </FieldContainer>
);

const FieldContainer = styled.div``;

const Field = styled.input`
  &[aria-invalid="true"] {
    border: 1px solid var(--warning);
  }
`;
