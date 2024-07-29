import Link from 'next/link';
import { Suspense } from 'react';

import PatientList from '@/features/patient/components/PatientList';

const PatientPage = async () => {
  return (
    <div>
      <h1>PatientPage</h1>
      <p>
        <Link
          href="/dashboard/patient/create"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Create
        </Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <PatientList />
      </Suspense>
    </div>
  );
};

export default PatientPage;
