import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      password: 'admin@123'
    },
    validate: passwordValidate,
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
          <h4 className='text-5xl font-bold'>Recover Password</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Enter OTP to Recover Password
          </span>
        </div>
        <form className='py-20' onSubmit={formik.handleSubmit}>

          <div className='textbox flex flex-col items-center gap-6'>
            {/* Connect input field to Formik */}
            <div className='input' text-center>
              <span className='py-4 text-sm text-left test-gray-500'>
                Enter 6 digit OTP sent to your Email-address.
              </span>
              <input
                className={styles.textbox}
                type='text'
                placeholder='OTP'
                {...formik.getFieldProps('password')} // Connect to Formik
              />
            </div>
            <button type='submit' className={styles.btn}>Recover</button>
          </div>
          <div className={`${styles.center} ${styles.testCenter}`}>
            <span className='text-gray-500'>Can't get OTP?? <Link className='text-red-500' to='/reset'>Resend</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Recovery;
