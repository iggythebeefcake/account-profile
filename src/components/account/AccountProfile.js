import React from 'react';
import Account from './Account';
import AccountForm from './AccountForm';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const AccountProfile = () => (
  <>
    <Account />
    <AccountForm />
  </>
)

export default AccountProfile;