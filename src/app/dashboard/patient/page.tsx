import { Suspense } from 'react';

import PatientList from '@/features/patient/components/PatientList';

const PatientPage = async () => {
  return (
    <div>
      <h1>PatientPage</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PatientList />
      </Suspense>
    </div>
  );
};

export default PatientPage;
