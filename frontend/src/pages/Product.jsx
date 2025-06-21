import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity duration-500 ease-in opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex sm:flex-row gap-6">
          {/* Thumbnail Column (standing rectangles) */}
          <div className="flex flex-col gap-3 w-[100px] h-[500px] overflow-y-auto">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-full h-[130px] object-cover rounded cursor-pointer border"
                alt=""
              />
            ))}
          </div>

          {/* Main Image and Info */}
          <div className="flex w-full gap-6">
            {/* Main Image */}
            <div className="w-2/3 h-[500px]">
              <img src={image} className="w-full h-full object-contain rounded" alt="" />
            </div>

            {/* Info Section */}
            <div className="flex flex-col w-[700px]">
              <h1 className="font-medium text-2xl">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={assets.star_icon} alt="star" className="w-3.5" />
                ))}
                <p className="pl-2">(122)</p>
              </div>
              <p className="mt-5 text-3xl font-medium">
                {currency}
                {productData.price}
              </p>
              <p className="mt-5 text-gray-500 ms:w-4/5">{productData.description}</p>

              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''
                        }`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-[200px]">
                Add to Cart
              </button>
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% original product.</p>
                <p>Cash on Delivery available.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Tab */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border px-5 py-3 text-sm">Reviews(122)</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-base text-gray-500'>
          <p>Elevate your everyday style with our Men's Premium Cotton T-Shirt. Crafted from 100% breathable cotton, this tee offers unmatched comfort and a soft, lightweight feel that’s perfect for all-day wear. The modern fit, crew neck design, and reinforced stitching ensure durability while maintaining a clean, classic look. Whether you're heading out for a casual hangout or layering it under a jacket, this versatile piece is a wardrobe essential.
          </p>
          <p>Stay cool and comfortable all day long with our Men’s Cotton T-Shirt. Made from soft, breathable fabric, this tee keeps you feeling fresh whether you’re out running errands or just relaxing at home. Its classic crew neck and slim fit make it easy to pair with your favorite jeans or shorts. Durable and easy to care for, this t-shirt is a must-have basic for every guy’s wardrobe.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
