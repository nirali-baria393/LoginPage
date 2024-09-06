import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';

const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate: usernameValidate,
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
          <h4 className='text-5xl font-bold'>Hello Again!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Discover more by connecting with us.
          </span>
        </div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <img src={Avatar} alt="avatar" className={styles.profile_img} />
          </div>
          <div className='textbox flex flex-col items-center gap-6'>
            {/* Connect input field to Formik */}
            <input
              className={styles.textbox}
              type='text'
              placeholder='Username'
              {...formik.getFieldProps('username')} // Spread Formik props
            />
            <button type='submit' className={styles.btn}>Let's Go</button>
          </div>
          <div className={`${styles.center} ${styles.testCenter}`}>
            <span className='text-gray-500'>Not a Member <Link className='text-red-500' to='/register'>Register Now</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Username;
