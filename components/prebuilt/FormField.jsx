import styled from "@emotion/styled";

const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid black;

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: black;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid silver;
  @media (max-width: 768px) {
   font-size: 14px;
  }
`;

const Input = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: black;
  background-color: transparent;
  animation: 1ms void-animation-out;

  &::placeholder {
    color: silver;
  }
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

export default FormField;
