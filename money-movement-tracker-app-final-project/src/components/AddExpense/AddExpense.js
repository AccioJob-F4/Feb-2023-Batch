import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Card,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  Heading,
  Button,
} from "@chakra-ui/react";

import { DELETE_EXPENSE, ADD_EXPENSE } from "../../store/action";
import { PATHS } from "../../paths";

const filterStyle = {
  width: "100%",
  height: "100vh",
  background: "dodgerblue",
};

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: "",
    Description: "",
    expenseType: "",
    amount: 0,
    date: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch({ type: ADD_EXPENSE, data: formData });
    navigate(PATHS.MANAGE_EXPENSE);
  };

  return (
    <div style={filterStyle}>
      <Card size="md" mr={60} ml={60} mb={30}>
        <CardBody>
          <Heading>Add Expense</Heading>
          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Desc</FormLabel>
            <Input
              type="text"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Expense Type</FormLabel>
            <Select
              name="expenseType"
              value={formData.expenseType}
              onChange={handleChange}
            >
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="green"
                fontSize="0.9em"
                children="INR"
              />
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
            />
          </FormControl>
          <FormControl mt={4}>
            <Button colorScheme="twitter" onClick={handleSubmit}>
              + Add
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddExpense;
