import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';
import  {resetPasswordValidate} from '../helper/validate'

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: 'admin@123',
      confirm_pwd: 'admin@123'
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  });

  return (
    <div className='container mx-auto h-screen flex justify-center items-center'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className={styles.glass}>
        <div className='title flex flex-col items-center mb-12'>
          <h4 className='text-5xl font-bold'>Reset Password</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Enter new password.
          </span>
        </div>
        <form className='py-20' onSubmit={formik.handleSubmit}>
          
          <div className='textbox flex flex-col items-center gap-6'>
            {/* Connect input field to Formik */}
            <input
              className={styles.textbox}
              type='password'
              placeholder='New Password'
              {...formik.getFieldProps('password')} // Spread Formik props
            />
            <input
              className={styles.textbox}
              type='password'
              placeholder='Repeat Password'
              {...formik.getFieldProps('confirm_pwd')} // Spread Formik props
            />
            <button type='submit' className={styles.btn}>Sign In</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Reset;
