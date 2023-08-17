import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import {fetchApi} from '../../services/api';
import {SITE_URL} from '../../services/constants';
import SearchBar from '../shared/SearchBar';
import Resource from '../shared/Resource';

const Resources = () => {
  const [resources, setResources] = useState([]);

  const getResources = async () => {
    const resources = await fetchApi(
      `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_URL}/posts`
    );

    setResources(resources.posts);
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className='resources'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                Browse all resources
              </h2>
            </div>
            <SearchBar placeholder='Search by title, keyword, specialism or sector...' />
            {/* todo: mobile placeholder */}
            {/* todo: sort by / filters */}
            <div className='resources-grid'>
              <div>
                <span>Results ({resources.length})</span>
              </div>
              <Grid container spacing={3}>
                {resources.map((resource, i) => (
                  <Resource i={i} {...resource} />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
