'use client';

import { useEffect } from 'react';

import { courierPrime } from '@/utils/fonts';

interface PatientErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const PatientError = ({ error, reset }: PatientErrorProps) => {
  useEffect(() => {
    console.log('PatientError', error);
  }, [error]);

  return (
    <div>
      <p>PatientError</p>
      <p>
        <code className={courierPrime.className}>{error.message}</code>
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
      >
        Try again
      </button>
    </div>
  );
};

export default PatientError;
