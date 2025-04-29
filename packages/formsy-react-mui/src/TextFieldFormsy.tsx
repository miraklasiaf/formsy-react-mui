import { withFormsy } from 'formsy-react';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';

type Props = TextFieldProps & {
  name: string;
  setValue?: (value: any) => void;
  value?: any;
  errorMessage?: string;
  isPristine?: boolean;
  showError?: boolean;
};

function TextFieldFormsy(props: Props) {
  const { type = 'text', variant = 'outlined', name, label, showError } = props;

  const value = props.value || '';
  const errorMessage = props.errorMessage;

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (props.setValue) {
      props.setValue(event.currentTarget.value);
    }
    if (props.onChange) {
      props.onChange(event);
    }
  }

  return (
    <TextField
      fullWidth
      type={type}
      variant={variant}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={Boolean(showError && errorMessage)}
      helperText={showError && errorMessage}
    />
  );
}

export default withFormsy(TextFieldFormsy);
