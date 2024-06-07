import React, { useEffect } from 'react';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import AddEditProduct from '../AddEditProduct';

const ProductEditPage = () => {
  const { id } = useParams();
  const [{ apiData: currentProduct, loading }, { setQueryParams }] =
    useGetDataApi('/api/ecommerce/get', {}, {}, false);

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return loading || isEmptyObject(currentProduct) ? (
    <AppLoader />
  ) : (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AddEditProduct selectedProd={currentProduct} />
    </AppAnimate>
  );
};
export default ProductEditPage;
