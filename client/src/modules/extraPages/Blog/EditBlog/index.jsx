import React, { useEffect } from 'react';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import CreateBlog from '../CreateBlog';

const BlogEditPage = () => {
  const { id } = useParams();
  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi(
    '/pages/blogs/detail',
    {},
    { id: id },
    false,
  );

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return loading ? (
    <AppLoader />
  ) : (
    !isEmptyObject(apiData?.blogDetail) && (
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <CreateBlog selectedBlog={apiData.blogDetail} />
      </AppAnimate>
    )
  );
};
export default BlogEditPage;
