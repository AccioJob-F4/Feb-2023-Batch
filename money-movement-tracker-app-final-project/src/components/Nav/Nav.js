import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Text, Flex } from "@chakra-ui/react";
import { PATHS } from "../../paths";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card mb={50}>
        <CardBody>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="dodgerblue" fontWeight="800" fontSize="2em">
              Money Movement Tracker
            </Text>
            <Button
              colorScheme="red"
              onClick={() => {
                window.localStorage.clear();
                navigate(PATHS.LOGIN);
              }}
            >
              Logout
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nav;
