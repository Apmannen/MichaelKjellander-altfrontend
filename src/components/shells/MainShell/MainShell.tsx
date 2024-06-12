import { ReactNode } from 'react';
import css from './MainShell.module.css';
import { fontNotoSans } from '@/components/styling/GlobalCssClasses/functions';
import { apiService } from '@/modules/services/apiService';
import { paths } from '@/modules/paths';

export async function MainShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`${css.container}`}>
        <Sidebar />
        <main className={`${css.main} pt-20`}>{children}</main>
      </div>
    </>
  );
}

async function Sidebar() {
  const categories = await apiService.getCategories();

  return (
    <>
      <div className={`${css.sidebar} pt-20`}>
        <a className={`text-3xl font-bold ${fontNotoSans}`} href="/">
          Michael Kjellander
        </a>
        <div className="h-20"></div>
        {categories.map((category, index) => (
          <a className="block py-2" key={index} href={paths.pages.category(category.slug)}>
            {category.name}
          </a>
        ))}
      </div>
    </>
  );
}
