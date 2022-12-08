import React from "react";
import { Input, InputProps } from "../Input";
import { Control, Controller, FieldError } from "react-hook-form";

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

import { Error } from "./styles";

export function ControlledInput({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />

      {error && <Error>{error.message}</Error>}
    </>
  );
}
