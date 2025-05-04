# Formsy React MUI

This project simplifies the use of [`formsy-react`](https://github.com/formsy-react/formsy-react)
and [`Material-UI`](https://github.com/mui/material-ui). It provides opinionated use cases with following
components:

- FormsyContainer
- CheckboxFormsy
- CheckboxGroupFormsy
- RadioGroupFormsy
- TextFieldFormsy
- TBD

### Install

```sh
npm install formsy-react-mui formsy-react @mui/material
```

### Quickstart

```jsx
import {
  CheckboxFormsy,
  CheckboxGroupFormsy,
  FormsyContainer,
  RadioGroupFormsy,
  TextFieldFormsy,
} from 'formsy-react-mui';

const genders = [
  {
    value: '1',
    label: 'Male',
  },
  {
    value: '2',
    label: 'Female',
  },
];
const roles = [
  {
    value: '1',
    label: 'Admin',
  },
  {
    value: '2',
    label: 'User',
  },
];

function App() {
  function onSubmit(model, resetForm, invalidateForm) {
    console.log('Form submitted:', model);
  }

  return (
    <FormsyContainer autoComplete="off" onChange={onChange} onSubmit={onSubmit}>
      <TextFieldFormsy value="" name="fullName" label="Full Name" />
      <RadioGroupFormsy value="" name="genderId" label="Gender" options={genders} row />
      <CheckboxGroupFormsy value="" name="roles" label="Role" options={roles} />
      <CheckboxFormsy value="" name="acceptTos" label="I Accept the TOS" />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </FormsyContainer>
  );
}
```
