import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';

const PrivacyPolicy = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='legal privacy-policy'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                {t(`${NAMESPACE}:privacy:title`)}
              </h2>
            </div>
            <div className='text'>
              <p className='intro'>
                {t(`${NAMESPACE}:privacy:intro`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part1:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part1:text`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part2:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part2:text`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part3:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part3:text`)}
              </p>
              <br />
              <p>
                <a
                  href={t(`${NAMESPACE}:privacy:url1`)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {t(`${NAMESPACE}:privacy:url1`)}
                </a>
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part4:text`)}
              </p>
              <br />
              <p>
                <a
                  href={t(`${NAMESPACE}:privacy:url2`)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {t(`${NAMESPACE}:privacy:url2`)}
                </a>
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part5:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part5:text`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part6:title`)}
                </strong>
              </p>
              <p>
                <a
                  href={t(`${NAMESPACE}:privacy:part6:url1`)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {t(`${NAMESPACE}:privacy:part6:url1`)}
                </a>
              </p>
              <p>
                <a
                  href={t(`${NAMESPACE}:privacy:part6:url2`)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {t(`${NAMESPACE}:privacy:part6:url2`)}
                </a>
              </p>
              <p>
                <a
                  href={t(`${NAMESPACE}:privacy:part6:url3`)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {t(`${NAMESPACE}:privacy:part6:url3`)}
                </a>
              </p>
              <p>
                <a
                  href={t(`${NAMESPACE}:privacy:part6:url4`)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {t(`${NAMESPACE}:privacy:part6:url4`)}
                </a>
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part7:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part7:text`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part7:text2`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part8:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part8:text`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part8:text2`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part8:text3`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part8:text4`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part9:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part9:text`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part10:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part10:text`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part10:text2`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part10:text3`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part11:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part11:text`)}
              </p>
              <p>
                <strong>
                  {t(`${NAMESPACE}:privacy:part12:title`)}
                </strong>
              </p>
              <p>
                {t(`${NAMESPACE}:privacy:part12:text`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part12:text2`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part12:text3`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part12:text4`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part12:text5`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part12:text6`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part12:text7`)}
              </p>
              <br />
              <p>
                {t(`${NAMESPACE}:privacy:part12:text8`)}
              </p>
              <p className='updated'>
                {t(`${NAMESPACE}:privacy:lastUpdated`, {
                  date: '24th August 2023'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;