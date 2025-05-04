import { withFormsy } from 'formsy-react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from '@mui/material';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = RadioGroupProps & {
  disabled?: boolean;
  label?: string;
  options?: Option[];
  required?: boolean;
  //formsy-react props
  errorMessage?: string;
  isPristine?: boolean;
  setValue: (value: any) => void;
  showRequired?: boolean;
  value?: any;
};

function RadioGroupFormsy(props: Props) {
  const { defaultValue, disabled, label, name, options = [], required = false, row } = props;
  const { errorMessage, value } = props;

  function changeValue(event: React.ChangeEvent<HTMLInputElement>, val: string) {
    props.setValue(val);
    if (props.onChange) {
      props.onChange(event, event.target.value);
    }
  }

  return (
    <FormControl
      component="fieldset"
      error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
      className={props.className}
      required={required}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup
        row={row}
        defaultValue={defaultValue}
        name={name}
        onChange={changeValue}
        value={value}
      >
        {options.map((option) => {
          const optionValue = option.value;
          const optionLabel = option.label;
          const optionDisabled = option.disabled || false;
          const checked = value ? value === optionValue : false;

          return (
            <FormControlLabel
              key={optionValue}
              control={
                <Radio
                  value={optionValue}
                  checked={checked}
                  disabled={disabled || optionDisabled}
                />
              }
              label={optionLabel}
            />
          );
        })}
      </RadioGroup>
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default withFormsy(RadioGroupFormsy);
