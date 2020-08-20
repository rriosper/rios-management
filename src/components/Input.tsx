import { TextField, TextFieldProps } from "@material-ui/core";
import styled, { StyledComponent } from "@xstyled/styled-components";
import { width } from "@xstyled/system";

interface InputProps {
  width?: string;
}

const Input: StyledComponent<
  (props: TextFieldProps & InputProps) => JSX.Element,
  any,
  {},
  never
> = styled(TextField)`
  ${width};
`;

Input.defaultProps = {
  width: "100%",
};

export default Input;
