import React from "react"
import { useForm } from "react-hook-form"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

export default function form() {
  const { register, handleSubmit } = useForm()
  const handleRegistration = data => console.log(data)
  return (
    <Form onSubmit={handleSubmit(handleRegistration)}>
      <FormGroup>
        <Label>Name</Label>
        <input className="form-control" {...register("text")} type="text" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input {...register("text")} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input {...register("text")} />
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  )
}
