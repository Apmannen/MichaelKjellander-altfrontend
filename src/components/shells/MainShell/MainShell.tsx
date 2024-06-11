import { ReactNode } from 'react';
import css from './MainShell.module.css';
import { fontNotoSans } from '@/components/styling/GlobalCssClasses/functions';

export function MainShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`${css.container}`}>
        <Sidebar />
        <main className={`${css.main} pt-20`}>{children}</main>
      </div>
    </>
  );
}

function Sidebar() {
  return (
    <>
      <div className={`${css.sidebar} pt-20`}>
        <a className={`text-3xl font-bold ${fontNotoSans}`} href="/">
          Michael Kjellander
        </a>
      </div>
    </>
  );
}
