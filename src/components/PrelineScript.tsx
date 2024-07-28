'use client';

import { usePathname } from 'next/navigation';
import { IStaticMethods } from 'preline/preline';
import { useEffect } from 'react';

declare global {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline');

      window.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
}
