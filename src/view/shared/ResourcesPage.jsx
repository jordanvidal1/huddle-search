import React, {useEffect} from 'react';
import Resources from './Resources';
import useBlog from '../../services/hooks/useBlog';

const ResourcesPage = props => {
  const {name} = props;

  const {
    loadBlog,
    isBlogLoading,
    blogPosts,
  } = useBlog();

  useEffect(() => {
    loadBlog();
  }, []);

  return (
    <div className='related-resources'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <Resources
              name={name}
              resources={blogPosts}
              isLoading={isBlogLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
