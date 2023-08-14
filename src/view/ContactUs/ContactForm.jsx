import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import Input from '../shared/Input';
import {fetchApi} from '../../services/api';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

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

    return await fetchApi(
      `${window.SITE_URL}/wp-json/contact-form-7/v1/contact-forms/26/feedback`,
      'POST',
      formData
    );
  }

  return (
    <div className='contact'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <h2>
                Take a moment to talk to the team
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
              </p>
            </div>
            <div className='action-container'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
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
                  <Grid item xs={6}>
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
                    Send message
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
