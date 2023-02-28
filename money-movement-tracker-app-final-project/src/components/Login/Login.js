import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

import { client } from "../../client";
import { PATHS } from "../../paths";
import { centeredStyle } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleLogin = () => {
    const body = { email, password };
    client.post("/login", body).then((resp) => {
      window.localStorage.setItem("token", resp.data.token);
      navigate(PATHS.MANAGE_EXPENSE);
    });
  };

  return (
    <div style={centeredStyle}>
      <Card variant="elevated" size="lg" maxW="md" width="100%">
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <>
            <Text mb="8px">Email</Text>
            <Input
              value={email}
              name="email"
              onChange={handleChange}
              size="md"
            />
          </>
          <>
            <Text mt={4} mb="8px">
              Password
            </Text>
            <Input
              // type="password"
              value={password}
              name="password"
              onChange={handleChange}
              size="md"
            />
          </>
          <Button mt={4} ml={40} colorScheme="twitter" onClick={handleLogin}>
            Log In
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
