import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

import axios from "axios";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const errorMessages = {
  email: "Please enter a valid email address",
  password: "Password must be at least 4 characters long",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    terms: false,
  });

  const history = useHistory();

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    axios
      .get("https://6540a96145bedb25bfc247b4.mockapi.io/api/login")
      .then((res) => {
        const user = res.data.find(
          (item) => item.password == form.password && item.email == form.email
        );
        if (user) {
          setForm(initialForm);
          history.push("/main");
        } else {
          history.push("/error");
        }
      });
  };

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          invalid={errors.email}
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
          invalid={errors.password}
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && (
          <FormFeedback>{errorMessages.password}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          invalid={errors.terms}
          checked={form.terms}
          onChange={handleChange}
        />
        <Label check>I agree to terms of service and privacy policy</Label>
      </FormGroup>
      <Button disabled={!isValid}>Sign In</Button>
    </Form>
  );
}
