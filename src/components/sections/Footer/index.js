import React from "react";

import { Container } from "./styles";

const todayYear = new Date().getFullYear();

export const Footer = () => <Container>© 2013 – {todayYear}</Container>;
