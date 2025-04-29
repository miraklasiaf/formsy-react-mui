'use client';
import React from 'react';
import {
  CardContent,
  CardActions,
  Container,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import { TextFieldFormsy, Form } from 'formsy-react-mui';
import { Panel } from './panel';

export default function Home() {
  const [formData, setFormData] = React.useState({});

  function handleSubmit(model) {
    console.log('Form submitted:', model);
  }

  function onChange(model) {
    setFormData(model);
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: '28px' }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Form onChange={onChange} onSubmit={handleSubmit}>
            <Panel panelTitle="Form Example">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={3}>
                    <TextFieldFormsy name="fullname" label="Full Name" />
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
                    <Button
                      className="normal-case"
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Panel>
          </Form>
        </Grid>
        <Grid size={6}>
          <div className="p-6">
            <div className="mb-3">
              <Typography>Form Data:</Typography>
            </div>
            <pre className="p-6 bg-gray-100 rounded-md">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
