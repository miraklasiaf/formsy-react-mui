import { withFormsy } from 'formsy-react';
import { FormControl, FormHelperText, FormLabel, RadioGroup, RadioGroupProps } from '@mui/material';

type Props = RadioGroupProps & {
  errorMessage?: string;
  isPristine?: boolean;
  label: string;
  required?: boolean;
  setValue: (value: any) => void;
  showRequired?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
};

function RadioGroupFormsy(props: Props) {
  const { children, color, defaultValue, name, onBlur, onChange, onKeyDown, row, variant } = props;
  const { errorMessage, value, isPristine, showRequired } = props;

  const importedProps = {
    children,
    color,
    defaultValue,
    name,
    onBlur,
    onChange,
    onKeyDown,
    row,
    variant,
  };

  function changeValue(event: React.ChangeEvent<HTMLInputElement>, val: string) {
    props.setValue(val);
    if (props.onChange) {
      props.onChange(event, event.target.value);
    }
  }

  return (
    <FormControl
      error={Boolean((!isPristine && showRequired) || errorMessage)}
      className={props.className}
    >
      <FormControl required={props.required} error={Boolean(errorMessage)}>
        {props.label && <FormLabel>{props.label}</FormLabel>}
        <RadioGroup {...importedProps} value={value || null} onChange={changeValue} />
        {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    </FormControl>
  );
}

export default withFormsy(RadioGroupFormsy);
