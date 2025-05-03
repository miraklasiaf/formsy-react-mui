import { withFormsy } from 'formsy-react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  CheckboxProps,
} from '@mui/material';

type Props = CheckboxProps & {
  label: string;
  required?: boolean;
  //formsy-react props
  errorMessage?: string;
  isPristine?: boolean;
  setValue: (value: any) => void;
  showRequired?: boolean;
  value?: boolean;
};

function CheckboxFormsy(props: Props) {
  const {
    checkedIcon,
    classes,
    color,
    disabled,
    disableRipple,
    icon,
    id,
    indeterminate,
    indeterminateIcon,
    onChange,
    slotProps,
  } = props;
  const { errorMessage, value } = props;

  const importedProps = {
    checkedIcon,
    classes,
    color,
    disabled,
    disableRipple,
    icon,
    id,
    indeterminate,
    indeterminateIcon,
    onChange,
    slotProps,
  };

  function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    props.setValue(event.target.checked);
    if (props.onChange) {
      props.onChange(event, event.target.checked);
    }
  }

  return (
    <FormControl
      error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
      className={props.className}
    >
      <FormControlLabel
        control={<Checkbox {...importedProps} checked={value} onChange={changeValue} />}
        label={props.label}
      />
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default withFormsy(CheckboxFormsy);
