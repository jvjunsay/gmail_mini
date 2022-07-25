import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import './SendMail.css';
import firebase from 'firebase/compat/app';

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      userId: firebase.auth().currentUser.uid,
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close
          className='sendMail__close'
          onClick={() => {
            dispatch(closeSendMessage());
          }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='email'
          {...register('to', { required: true })}
        />
        {errors.to && <p className='sendMail__error'>To is required</p>}

        <input
          name='subject'
          type='text'
          placeholder='Subject'
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className='sendMail__error'>Subject is required</p>
        )}

        <input
          name='message'
          type='text'
          className='sendMail__message'
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className='sendMail__error'>Message is required</p>
        )}

        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
