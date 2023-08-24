import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {FORM_ID, NAMESPACE, SITE_URL} from '../../data/constants';
import {fetchApi} from '../../services/api';
import Input from './Input';

const Buffer = require('buffer/').Buffer;

const Subscribe = props => {
  const {t} = props;

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(`your-${key}`, data[key]);
    }

    const headers = new Headers();
    headers.set('Authorization', 'Basic '
      + Buffer.from(
        process.env.REACT_APP_WP_USER
        + ":"
        + process.env.REACT_APP_WP_TOKEN
      ).toString('base64'));

    return await fetchApi(
      `https://${SITE_URL}/index.php/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
      'POST',
      formData,
      headers
    );
  }

  return (
    <div className='resource-share'>
      <div className='share-text'>
        <h5>{t(`${NAMESPACE}:jobResource:email:title`)}</h5>
        <span>{t(`${NAMESPACE}:jobResource:email:text`)}</span>
      </div>
      <div className='action-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id='email-address'
            type='text'
            name='email'
            placeholder='Enter your email address'
            register={register('email', {
              required: 'Email address is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email address is invalid.'
              }
            })}
            errors={errors}
          />
          <button
            className='btn btn-secondary'
            type='submit'
          >
            {t(`${NAMESPACE}:jobResource:email:button`)}
          </button>
          <span>
            {t(`${NAMESPACE}:jobResource:email:terms:part1`)}<Link to='/terms'>
            {t(`${NAMESPACE}:jobResource:email:terms:link`)}
            </Link>
            {t(`${NAMESPACE}:jobResource:email:terms:part2`)}
          </span>
          {/* todo: success message */}
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
