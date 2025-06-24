import React from 'react';
import Title from '../components/Title';
import { Car } from 'phosphor-react';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

const PlaceOrder= () => {
  const[method,setMethod]=React.useState('cod');
  const{backendUrl,token,cartItems,setCartItems,delivery_fee,products}=useContext(ShopContext)
  const[formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;

    setFormData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    try{
      let orderItems=[]
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]>0){
            const itemInfo=structuredClone(products.find(product=>product._id===items))
            if(itemInfo){
              itemInfo.size=item
              itemInfo.quantity=cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData={
        address:formData,
        items:orderItems,
        amount:getCarAmount()+delivery_fee
      }
      switch(method){
        case 'cod':
          const response=await axios.post(backendUrl+'api/order/place',orderData,{headers:{token}})
          if(response.data.success){
            setCartItems({})
            navigate('/orders')
          }
          else{
            toast.error(response.data.message)
          }
          break;
        default:
          break
      }
    }
    catch(error){
      toast.error(error.message)
    }
  }

  const {navigate} = useContext(ShopContext);
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-3xl my-3'>
          <Title text1={'DELIVERY'}  text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} value={formData.firstName} name='firstname' className='border border-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Full Name'  id="" />
          <input required onChange={onChangeHandler} alue={formData.lastName} name='lastname' className='border border-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' id="" />
        </div>
        <input required onChange={onChangeHandler} value={formData.email} name='email' className='border border-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' id="" />
        <input required onChange={onChangeHandler} value={formData.street} className='border border-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address Line-1' name="street" id="" />
        
        <div className='flex gap-3'>
          <input required value={formData.city} onChange={onChangeHandler} className='border border-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' name="city" id="" />
          <input required value={formData.state} onChange={onChangeHandler} className='border border-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' name="state" id="" />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} value={formData.zipcode} className='border border-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Zip Code' name="zipcode" id="" />
          <input required onChange={onChangeHandler} value={formData.country} className='border border-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' name="country" id="" />
        </div>
        <input required onChange={onChangeHandler} value={formData.phone} className='border border-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' name="phone" id="" />
      </div>

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          <div className='flex gap-3 flex-row lg:flex:row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-600':''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-600':''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-600':''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'> Cash On Delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>
      
    </form>
  );
}
export default PlaceOrder;