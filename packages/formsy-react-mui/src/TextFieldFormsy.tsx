import { withFormsy } from 'formsy-react';
import { TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  errorMessage?: string;
  isPristine?: boolean;
  setValue: (value: any) => void;
  showRequired?: boolean;
};

function TextFieldFormsy(props: Props) {
  const {
    autoComplete,
    autoFocus,
    children,
    className,
    defaultValue,
    disabled,
    fullWidth,
    id,
    inputRef,
    label,
    multiline,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    rows,
    maxRows,
    minRows,
    select,
    slotProps,
    type = 'text',
    variant = 'outlined',
    color,
  } = props;

  const { errorMessage, isPristine, showRequired } = props;
  const value = props.value || '';

  const importedProps = {
    autoComplete,
    autoFocus,
    children,
    className,
    color,
    defaultValue,
    disabled,
    fullWidth,
    id,
    inputRef,
    label,
    multiline,
    maxRows,
    minRows,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    rows,
    select,
    slotProps,
    type,
    variant,
  };

  function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    props.setValue(event.currentTarget.value);
    if (props.onChange) {
      props.onChange(event);
    }
  }

  return (
    <TextField
      {...importedProps}
      onChange={changeValue}
      value={value}
      error={Boolean((!isPristine && showRequired) || errorMessage)}
      helperText={errorMessage}
    />
  );
}

export default withFormsy(TextFieldFormsy);
