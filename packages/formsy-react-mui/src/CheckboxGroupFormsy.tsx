import { withFormsy } from 'formsy-react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  CheckboxProps,
} from '@mui/material';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = CheckboxProps & {
  label: string;
  options?: Option[];
  required?: boolean;
  row?: boolean;
  //formsy-react props
  errorMessage?: string;
  isPristine?: boolean;
  setValue: (value: any) => void;
  showRequired?: boolean;
  value?: any[];
};

function CheckboxGroupFormsy(props: Props) {
  const { label, options = [], row } = props;
  const { errorMessage, value = [] } = props;

  function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    let newValue = [...value];
    if (event.target.checked) {
      newValue.push(event.target.value);
    } else {
      newValue = value.filter((item) => item !== event.target.value);
    }
    props.setValue(newValue);
    if (props.onChange) {
      props.onChange(event, event.target.checked);
    }
  }

  return (
    <FormControl
      component="fieldset"
      error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
      className={props.className}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup row={row}>
        {options.map((option) => {
          const optionValue = option.value;
          const optionLabel = option.label;
          const optionDisabled = option.disabled || false;
          const checked = value ? value.includes(optionValue) : false;

          return (
            <FormControlLabel
              key={optionValue}
              control={
                <Checkbox
                  value={optionValue}
                  checked={checked}
                  onChange={changeValue}
                  disabled={optionDisabled}
                />
              }
              label={optionLabel}
            />
          );
        })}
      </FormGroup>
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default withFormsy(CheckboxGroupFormsy);
