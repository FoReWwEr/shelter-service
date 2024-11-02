import { FooterComponent } from "../auxiliary/FooterComponent";
import { HeaderComponent } from "../auxiliary/HeaderComponent"
import './ProfileMenu.scss';
import { AccountMenu } from "./AccountMenu/AccountMenu";
import { useState } from "react";
import { EditMenu } from "./EditMenu/EditMenu";
import cn from 'classnames';

export const ProfileMenu = () => {
  const [view, setView] = useState<'Account' | 'Edit'>('Account');

  return (
    <>
      <HeaderComponent>
        <h3 className="profile__text">Профіль</h3>
        <nav className="profile__nav">
          <button
            className={cn('profile__nav--button', { 'profile__nav--button--active': view === 'Account' })}
            onClick={() => setView('Account')}
          >
            Обліковий запис
          </button>
          <button
            className={cn('profile__nav--button', { 'profile__nav--button--active': view === 'Edit' })}
            onClick={() => setView('Edit')}
          >
            Редагувати профіль
          </button>
        </nav>
      </HeaderComponent>

      {view === 'Account' && <AccountMenu />}
      {view === 'Edit' && <EditMenu />}

      <FooterComponent />
    </>
  )
}
