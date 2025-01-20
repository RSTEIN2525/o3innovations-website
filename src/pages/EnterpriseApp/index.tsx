import React from 'react';
import { ProductPage } from '../ProductPage';
import { AppDevelopment } from '../../components/sections/AppDevelopment';

export function EnterpriseAppPage() {
  return (
    <ProductPage>
      <AppDevelopment />
    </ProductPage>
  );
}