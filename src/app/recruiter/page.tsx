

import { redirect } from 'next/navigation';
import React from 'react';

export default function RecruiterPage() {
  redirect('/recruiter/post/list');
  return (
    <div>
      <h1>Recruiter Page</h1>
    </div>
  );
}
