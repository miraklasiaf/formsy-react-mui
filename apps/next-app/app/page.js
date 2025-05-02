'use client';
import React from 'react';
import {
  CardContent,
  CardActions,
  Container,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
} from '@mui/material';
import {
  FormsyContainer,
  CheckboxFormsy,
  RadioGroupFormsy,
  TextFieldFormsy,
} from 'formsy-react-mui';
import { Panel } from './panel';
import isEmpty from 'lodash-es/isEmpty';

export default function Home() {
  const [formData, setFormData] = React.useState({});

  function validate(model) {
    let sb = {};
    if (!model.fullName) {
      sb.fullName = 'This field is required.';
    }
    if (!model.genderId) {
      sb.genderId = 'This field is required.';
    }
    if (!model.acceptTos) {
      sb.acceptTos = 'This field is required.';
    }
    return sb;
  }

  function onSubmit(model, resetForm, invalidateForm) {
    let sb = validate(model);
    if (!isEmpty(sb)) {
      invalidateForm(sb);
      return;
    }

    console.log('Form submitted:', model);
  }

  function onChange(model) {
    setFormData(model);
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: '28px' }}>
      <Grid container spacing={2}>
        <Grid size={7}>
          <FormsyContainer autoComplete="off" onChange={onChange} onSubmit={onSubmit}>
            <Panel panelTitle="Form Example">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <TextFieldFormsy value="" name="fullName" label="Full Name" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <RadioGroupFormsy value="" name="genderId" label="Gender" row>
                      <FormControlLabel value="1" control={<Radio />} label="Male" />
                      <FormControlLabel value="2" control={<Radio />} label="Female" />
                    </RadioGroupFormsy>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <CheckboxFormsy value="" name="acceptTos" label="I Accept the TOS" />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions
                sx={{
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 2,
                  paddingBottom: 2,
                  backgroundColor: '#f5f5f5',
                }}
              >
                <Grid container>
                  <Grid>
                    <Button className="normal-case" variant="contained" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Panel>
          </FormsyContainer>
        </Grid>
        <Grid size={5}>
          <div className="p-6">
            <div className="mb-3">
              <Typography>Form Data:</Typography>
            </div>
            <pre className="p-6 bg-gray-100 rounded-md">{JSON.stringify(formData, null, 2)}</pre>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
