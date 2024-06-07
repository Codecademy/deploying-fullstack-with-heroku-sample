import React, { useEffect } from 'react';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import AppLoader from '@crema/components/AppLoader';
import BlogDetail from './BlogDetail';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from '@crema/helpers/ApiHelper';

const BlogDetailPage = () => {
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
      <BlogDetail
        blogSidebar={apiData.blogSidebar}
        blogDetail={apiData.blogDetail}
      />
    )
  );
};
export default BlogDetailPage;
