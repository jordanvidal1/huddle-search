import React, {useEffect} from 'react';
import Resources from './Resources';
import useWordPress from '../../services/hooks/useWordPress';

const ResourcesPage = props => {
  const {name} = props;

  const {
    loadBlog,
    isBlogLoading,
    blogPosts,
  } = useWordPress();

  useEffect(() => {
    loadBlog();
  }, []);

  if (!blogPosts || blogPosts.length < 1) {
    return <div/>
  }

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
