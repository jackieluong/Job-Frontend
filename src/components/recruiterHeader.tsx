import React from 'react';
import Logo from './ui/logo';
import RecruiterNav from './ui/recruiterNav';

export default function RecruiterHeader() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Logo />
        <RecruiterNav />
      </div>
    </header>
  );
}
