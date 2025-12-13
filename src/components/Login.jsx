import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function Login() {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" /> 
        <Label check>I agree to terms of service and privacy policy</Label>
      </FormGroup>
    </Form>
  );
}
