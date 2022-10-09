import * as React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Controller } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
type Fielddata = {
  FieldName: string;
  label: string;
  fullWidth: boolean;
  variant: "standard" | "outlined" | "filled" | undefined;
  size: "small" | "medium" | undefined;
  startadornment?: string;
  endadornment?: string;
  fieldtype?: string;
  error?: boolean;
  control: any;
};

const InputField = ({
  FieldName,
  label,
  variant,
  fullWidth,
  control,
  error,
  size,
  ...restProps
}: Fielddata) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <Box width="100%" my={"8px"}>
      <Controller
        name={FieldName}
        defaultValue=""
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            label={label}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            onChange={onChange}
            error={!!error}
            type={showPassword ? "text" : restProps.fieldtype}
            InputProps={{
              startAdornment: restProps.startadornment && (
                <InputAdornment position="start">
                  {restProps.startadornment}
                </InputAdornment>
              ),
              endAdornment: restProps.endadornment ? (
                <InputAdornment position="end">
                  {restProps.endadornment}
                </InputAdornment>
              ) : restProps.fieldtype === "password" ? (
                <InputAdornment position="end">
                  {showPassword ? (
                    <AiFillEye onClick={handleClickShowPassword} size={28} cursor="pointer" />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={handleClickShowPassword}
                      size={28}
                      cursor="pointer"
                    />
                  )}
                </InputAdornment>
              ) : null,
            }}
            onBlur={onBlur}
            value={value}
            {...restProps}
          />
        )}
        rules={{ required: "Required Field!" }}
      />
    </Box>
  );
};

export default InputField;
