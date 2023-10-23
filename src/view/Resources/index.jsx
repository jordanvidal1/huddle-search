import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import useWordPress from '../../services/hooks/useWordPress';
import SearchBar from '../shared/SearchBar';
import Resource from '../shared/Resource';
import Loader from '../shared/Loader';

const Resources = () => {
  const {
    loadBlog,
    isBlogLoading,
    blogPosts,
    blogCount
  } = useWordPress();

  useEffect(() => {
    loadBlog();
  }, []);

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='resources'>
      <div className='pattern'>
        <div className='container'>
          <div className='inner-container'>
            <div className='content'>
              <div className='title'>
                <h2>
                  {t(`${NAMESPACE}:jobResource:resources:title`)}
                </h2>
              </div>
              <SearchBar placeholder='Search by title, keyword, specialism or sector...' />
              {/* todo: mobile placeholder */}
              {/* todo: sort by / filters */}
              <div className='resources-grid'>
                <div>
                  <span>Results ({blogCount})</span>
                </div>
                {isBlogLoading && blogPosts.length < 1 ? <Loader />
                  : (
                    <Grid container spacing={3}>
                      {blogPosts.length > 0 && blogPosts.map((resource, i) => (
                        <Resource i={i} {...resource} />
                      ))}
                    </Grid>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
