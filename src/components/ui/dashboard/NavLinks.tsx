'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
  },
  {
    name: 'Patient',
    href: '/dashboard/patient',
  },
  {
    name: 'Account',
    href: '/dashboard/user',
  },
];

const NavLinks: React.FC<{}> = () => {
  const pathname = usePathname();

  return links.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        className={clsx(isActive && 'text-indigo-500 focus:outline-none')}
        href={link.href}
      >
        {link.name}
      </Link>
    );
  });
};

export default NavLinks;
