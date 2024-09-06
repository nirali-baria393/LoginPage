import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/profile.png';
import styles from '../styles/Profile.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';

const Profile = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstname : '',
      lastname : '',
      mobile : '',
      email: '',
      address: '',
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    }
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className={styles.container}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className={styles.glass}>
        <div className={styles.content}>
          <h4 className={styles.title}>Profile</h4>
          <span className={styles.subtitle}>
            You can update the details.
          </span>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.profile}>
              <label htmlFor="profile">
                <img src={file || Avatar} alt="avatar" className={styles.profile_img} />
              </label>
              <input onChange={onUpload} type="file" id="profile" name='profile' />
            </div>
            <div className={styles.textbox}>
              <div className='name flex w-3/4 gap-10'>
                <input
                  type='text'
                  placeholder='Firstname'
                  {...formik.getFieldProps('firstname')} // Spread Formik props
                />
                <input
                  type='text'
                  placeholder='Lastname'
                  {...formik.getFieldProps('lastname')} // Spread Formik props
                />
              </div>
              <div className='name flex w-3/4 gap-10'>
                <input
                  type='text'
                  placeholder='Mobile'
                  {...formik.getFieldProps('mobile')} // Spread Formik props
                />
                <input
                  type='email'
                  placeholder='Email'
                  {...formik.getFieldProps('email')} // Spread Formik props
                />
              </div>
              <div>
              <input
                type='text'
                placeholder='Address'
                {...formik.getFieldProps('address')} // Spread Formik props
              />
              </div>
              <button type='submit' className={styles.btn}>Update</button>
              
            </div>
          </form>
          <div className={styles.footer}>
            <span>Come back later? <Link to='/'>Log out</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
