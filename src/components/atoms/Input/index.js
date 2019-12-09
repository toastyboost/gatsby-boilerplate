import * as React from "react";

import { FieldContainer, Field } from "./styles";

export const Input = ({ value, placeholder, isInvalid, onChange }) => (
  <FieldContainer>
    <Field value={value} placeholder={placeholder} aria-invalid={isInvalid} onChange={onChange} />
  </FieldContainer>
);
