import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/profile.png';
import styles from '../styles/Register.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import  convertToBase64  from '../helper/convert';

const Register = () => {

const [file,setFile] = useState()


  const formik = useFormik({
    initialValues: {
      email: 'niralibaria123@gmail.com',
      username: 'example123',
      password: 'admin@123'
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile : file || ''});
      console.log(values);
    }
  });

   /**formik doesn't support file upload so we need to create this handler */
   const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
   }

  return (
    <div className={styles.container}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className={styles.glass}>
        <div className={styles.content}>
          <h4 className={styles.title}>Register</h4>
          <span className={styles.subtitle}>
            Happy to join you!
          </span>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.profile}>
              <label htmlFor="profile">
                <img src={file || Avatar} alt="avatar" className={styles.profile_img} />
              </label>
              <input onChange={onUpload} type="file" id="profile" name='profile' />
            </div>
            <div className={styles.textbox}>
              {/* Connect input fields to Formik */}
              <input
                type='email'
                placeholder='Email'
                {...formik.getFieldProps('email')} // Spread Formik props
              />
              <input
                type='text'
                placeholder='Username'
                {...formik.getFieldProps('username')} // Spread Formik props
              />
              <input
                type='password'
                placeholder='Password'
                {...formik.getFieldProps('password')} // Spread Formik props
              />
            </div>
            <button type='submit' className={styles.btn}>Register</button>
          </form>
          <div className={styles.footer}>
            <span>Already registered? <Link to='/'>Login Now</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
