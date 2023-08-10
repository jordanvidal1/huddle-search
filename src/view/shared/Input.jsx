import React from 'react';

const Input = props => {
  const {children, type, name, label, img, register, errors} = props;
  const inputProps = {...props};

  delete inputProps.children;

  const renderLabel = () => (children || label)
    && <label htmlFor={name}>{children || label}</label>
  const renderErrors = () => errors?.[name]
    && <p className='error-msg'>{errors[name].message}</p>;

  if (type === 'checkbox') {
    return (
      <div className='checkbox-container'>
        <input {...inputProps} {...register} />
        {renderLabel()}
        {renderErrors()}
      </div>
    );
  }

  return (
    <div className='textfield'>
      {renderLabel()}
      <div className='input-container'>
        {img && <img className='search-icon' alt='search-icon' src={img}/>}
        <input {...inputProps} {...register} />
      </div>
      {renderErrors()}
    </div>
  );
}

export default Input;