import React from 'react';
import Calendar from '../Calendar/Calendar';
import { auth } from '../../firebase';

function HomePage() {
  return (
    <>
      <Calendar />
      <button
        className="w-full py-3 bg-red-600 mt-4 text-white"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </>
  );
}
export default HomePage;
