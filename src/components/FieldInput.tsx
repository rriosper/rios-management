import React from "react";
import { Field, FieldProps } from "formik";

import Input from "./Input";

interface FieldInputProps {
  name: string;
  label: string;
  type: string;
}

const InputForm: React.FC<FieldInputProps> = ({
  name,
  ...rest
}: FieldInputProps) => (
  <Field name={name}>
    {({ field, form: { errors, submitCount } }: FieldProps) => {
      return (
        <Input
          {...rest}
          {...field}
          error={submitCount > 0 && Boolean(errors[name])}
          helperText={submitCount > 0 && errors[name]}
          margin="normal"
          variant="outlined"
        />
      );
    }}
  </Field>
);

export default React.memo(InputForm);
