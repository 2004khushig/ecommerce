import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async(event) => {
    event.preventDefault();
  }

  const toggleState = () => {
    setCurrentState(prev => (prev === 'Login' ? 'Sign Up' : 'Login'));
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Sign Up' && (
        <input
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}

      <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />

      <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />

      <div className='w-full flex justify-between text-sm -mt-2'>
        <p className='cursor-pointer'>Forgot Password?</p>
        <p onClick={toggleState} className='cursor-pointer text-blue-600'>
          {currentState === 'Login' ? 'Create Account' : 'Login Here'}
        </p>
      </div>

      <button
        type="submit"
        className='mt-2 w-full bg-gray-800 text-white py-2 hover:bg-gray-700 transition-all duration-300'
      >
        {currentState}
      </button>
    </form>
  );
};

export default Login;
