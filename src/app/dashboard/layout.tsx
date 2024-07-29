'use client';

import React from 'react';

import { Navbar } from '@/components/ui/dashboard';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gray-50 dark:bg-neutral-900">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 container mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
