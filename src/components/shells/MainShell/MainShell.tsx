import { ReactNode } from 'react';
import css from './MainShell.module.css';
import { fontNotoSans } from '@/components/styling/GlobalCssClasses/functions';
import { apiService } from '@/modules/services/apiService';
import { paths } from '@/modules/paths';
import { Category } from '@/modules/models/functions';

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
  const categoryMap = await apiService.getCategoriesMap();

  return (
    <>
      <div className={`${css.sidebar} pt-20`}>
        <a className={`text-3xl font-bold ${fontNotoSans}`} href="/">
          Michael Kjellander
        </a>
        <div className="h-20"></div>
        <NavMenuLink category={categoryMap.get('Game')!} />
        <NavMenuLink category={categoryMap.get('GameReview')!} />
        <NavMenuLink category={categoryMap.get('Other')!} />
      </div>
    </>
  );
}

function NavMenuLink({ category }: { category: Category }) {
  return (
    <a className="block py-2" href={paths.pages.category(category.slug)}>
      {category.name}
    </a>
  );
}
