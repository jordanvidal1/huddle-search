import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import useWordPress from '../../services/hooks/useWordPress';
import Input from '../shared/Input';
import Loader from '../shared/Loader';

const ContactForm = () => {
  const {
    contactUs,
    contactUsResult,
    isContactUsLoading
  } = useWordPress();

  const {t} = useTranslation(['huddle', 'unitas']);

  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');

  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
    reset
  } = useForm();

  useEffect(() => {
    const values = getValues();
    if (values.firstName
      && values.lastName
      && values.email
      && values.number
      && values.message
      && values['checkbox-816']
    ) {
      contactUsResult
        .mapPattern('Success', [], ({data}) => {
          const res = data.toJS();
          if (res.status === 'mail_sent') {
            setType('success');
            setMessage('Message sent!');
            setTimeout(() => setMessage(''), 5000);
            reset();
          } else {
            setType('error');
            setMessage(res.status);
          }
        });
    }
  }, [contactUsResult]);

  return (
    <div id='contact' className='contact'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <h2>
                {t(`${NAMESPACE}:contactUs:form:title`)}
              </h2>
              <p>
                {t(`${NAMESPACE}:contactUs:form:text`)}
              </p>
            </div>
            <div className='action-container'>
              <p className={`${type}-msg`}>
                {message}
              </p>
              <form onSubmit={handleSubmit(contactUs)}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      id='first-name'
                      type='text'
                      name='firstName'
                      label='First name'
                      placeholder='First name'
                      register={register('firstName', {
                        required: 'First name is required.'
                      })}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      id='last-name'
                      type='text'
                      name='lastName'
                      label='Last name'
                      placeholder='Last name'
                      register={register('lastName', {
                        required: 'Last name is required.'
                      })}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      id='email-address'
                      type='text'
                      name='email'
                      label='Email address'
                      placeholder='you@company.com'
                      register={register('email', {
                        required: 'Email address is required.',
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: 'Email address is invalid.'
                        }
                      })}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      id='phone-number'
                      type='text'
                      name='number'
                      label='Phone number'
                      placeholder='+44 0000 000 000'
                      register={register('number', {
                        required: 'Phone number is required.'
                      })}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      id='message'
                      type='text'
                      name='message'
                      label='Message'
                      placeholder='Leave us a message...'
                      register={register('message', {
                        required: 'Message is required.'
                      })}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      id='privacy'
                      type='checkbox'
                      name='checkbox-816'
                      register={register('checkbox-816', {
                        required: 'You must agree to continue.'
                      })}
                      errors={errors}
                    >
                      You agree to our <Link to='/privacy-policy'>
                      privacy policy
                      </Link>.
                    </Input>
                  </Grid>
                </Grid>
                <div className='btn-container'>
                  <button
                    className='btn btn-primary'
                    type='submit'
                    disabled={isContactUsLoading}
                  >
                    {isContactUsLoading
                      ? <Loader />
                      : t(`${NAMESPACE}:contactUs:form:button`)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
