import React, { useEffect, useState } from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import ProductSidebar from './Sidebar';
import ProductContent from './Content';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import { useNavigate } from 'react-router-dom';
import { getStringFromHtml } from '@crema/helpers/StringHelper';
import dayjs from 'dayjs';
import { Form } from 'antd';
import { StyledTitle5 } from '../index.styled';
import PropTypes from 'prop-types';

export const AddEditProduct = ({ selectedProd }) => {
  const [form] = Form.useForm();
  const [selectedTags, setSelectedTags] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = React.useState([
    { id: 1, title: '', desc: '' },
  ]);
  const [productSpec, setProductSpec] = React.useState([
    { id: 1, title: '', desc: '' },
  ]);

  useEffect(() => {
    if (selectedProd) {
      setSelectedTags(selectedProd?.tag || []);
      setUploadedFiles(
        selectedProd?.image.map((img) => ({ ...img, preview: img.src })),
      );
      setProductInfo(selectedProd?.productInfo);
      setProductSpec(selectedProd?.productSpec);
    }
  }, [selectedProd]);

  const onFinish = (values) => {
    if (selectedProd) {
      const updatedProd = {
        ...selectedProd,
        ...values,
      };
      putDataApi('/api/ecommerce/list/update', infoViewActionsContext, {
        product: updatedProd,
      })
        .then(() => {
          navigate('/apps/ecommerce-admin/product-listing');
          infoViewActionsContext.showMessage('Product updated successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi('/api/ecommerce/list/add', infoViewActionsContext, {
        product: {
          ...values,
          description: getStringFromHtml(values.description),
          image: uploadedFiles.map((file, index) => ({
            id: index,
            src: file.preview,
            rating: 0,
            reviews: 0,
          })),
          createdAt: dayjs().format('DD MMM YYYY'),
          inStock: values?.inStock || false,
          tag: selectedTags,
          productInfo,
          productSpec,
        },
      })
        .then(() => {
          infoViewActionsContext.showMessage('Product created successfully!');
          navigate('/apps/ecommerce-admin/product-listing');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };
  return (
    <>
      <StyledTitle5>
        {selectedProd ? 'Edit Product' : 'Create a new product'}
      </StyledTitle5>

      <Form
        form={form}
        initialValues={
          selectedProd
            ? {
                ...selectedProd,
                category: selectedProd?.category || 1,
              }
            : {
                title: '',
                SKU: '',
                category: 1,
                mrp: 0,
                salemrp: 0,
                discount: 0,
                inStock: false,
              }
        }
        layout='vertical'
        onFinish={onFinish}
      >
        <AppRowContainer>
          <ProductContent
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
          <ProductSidebar
            form={form}
            isEdit={!!selectedProd}
            inStock={selectedProd?.inStock}
            selectedTags={selectedTags}
            productInfo={productInfo}
            productSpec={productSpec}
            setProductInfo={setProductInfo}
            setSelectedTags={setSelectedTags}
            setProductSpec={setProductSpec}
          />
        </AppRowContainer>
      </Form>
    </>
  );
};

AddEditProduct.propTypes = {
  selectedProd: PropTypes.object,
};

export default AddEditProduct;
