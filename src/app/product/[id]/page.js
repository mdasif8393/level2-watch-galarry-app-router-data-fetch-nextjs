import ProductDetails from '@/components/UI/ProductDetails';
import React from 'react';

const ProductDetailPage = async ({ params }) => {

    const res = await fetch(`http://localhost:5000/watches/${params?.id}`, {
        cache: "no-store"
    });
    const data = await res.json();

    console.log(data);

    return (
        <div>
            <ProductDetails product={data}></ProductDetails>
        </div>
    );
};

export default ProductDetailPage;