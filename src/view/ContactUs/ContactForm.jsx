import React from 'react';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {fetchApi} from '../../services/api';
import {FORM_ID, NAMESPACE, SITE_URL} from '../../data/constants'
import Input from '../shared/Input';

const Buffer = require('buffer/').Buffer;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const {t} = useTranslation(['huddle', 'unitas']);

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append(
      'your-subject',
      'Contact us'
    );
    formData.append(
      'your-name',
      `${data.firstName} ${data.lastName}`
    );

    for (const key in data) {
      formData.append(
        key.indexOf('checkbox') < 0 ? `your-${key}` : key, data[key]
      );
    }

    const headers = new Headers();
    headers.set('Authorization', 'Basic '
      + Buffer.from(
        process.env.REACT_APP_WP_USER
        + ":"
        + process.env.REACT_APP_WP_TOKEN
      ).toString('base64'));

    return await fetchApi(
      `https://${SITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
      'POST',
      formData,
      headers
    );
  }

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
              <form onSubmit={handleSubmit(onSubmit)}>
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
                        required: 'Phone number is required.',
                        // todo: phone number validation
                        // pattern: {
                        //   value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        //   message: 'Phone number is invalid.'
                        // }
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
                      You agree to our <Link to='/privacy'>privacy policy</Link>.
                    </Input>
                  </Grid>
                </Grid>
                <div className='btn-container'>
                  <button
                    className='btn btn-primary'
                    type='submit'
                  >
                    {t(`${NAMESPACE}:contactUs:form:button`)}
                  </button>
                </div>
                {/* todo: success message */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
