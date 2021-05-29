import React, { useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../Context';

export default function Footer() {
  const { nominatedMovies } = useContext(Context);

  const notify = () =>
    toast(
      `You have nominated 5 movies. Remove any movie to nominate another one.`
    );

  useEffect(() => {
    if (nominatedMovies.length === 5) {
      notify();
    }
  }, [nominatedMovies]);
  return (
    <footer>
      <p>Made by Jake Joseph</p>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </footer>
  );
}
