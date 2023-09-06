import React from 'react';
import { Formik } from 'formik';
import './App.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


const App = () => (
  <div className='wrapper'>
    <div className='formie'>
    <div className='foreword'>
      <h1>Registration</h1>
    </div>
    <h4>Fill all fields</h4>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.password) {
          errors.password = 'Require to fill';
        } else if (
          !/^[a-zA-Z0-9]{8,}$/.test(values.password)
        ) { errors.password = '8 symbols minimum'}
        
        

        if (!values.email) {
          errors.email = 'Require to fill';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Incorrect email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <TextField
            label="Enter your password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button variant='contained' disabled={values.password.length < 8 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) }>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </div>
  </div>
);

export default App;