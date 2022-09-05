import React from 'react';
import Image from 'next/image';
import cross from '../public/icons/cross.svg';
import searchIcon from '../public/icons/searchIcon.svg';
import dropdown from '../public/icons/dropdown.svg';
import notification from '../public/icons/notification.svg';

import {
  DropdownProfile,
  DropdownTeam,
  DropdownSetting,
  DropdownNeed,
  Logout,
} from '../public/Svg/Svg';
import { Switch, Input, Dropdown, Menu, Space } from 'antd';

export default function Header() {
  const menu = (
    <Menu
      className="dropdown"
      items={[
        {
          key: '1',
          label: (
            <div>
              <div className="Dropdown-head">
                <p>User Profile</p>
              </div>
              <div className="naming">
                <h5>Chibuzo Michael</h5>
                <h6>System Designer</h6>
              </div>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <ul>
              <li className="active">
                <span>{DropdownProfile} </span> Profile
              </li>
              <li>
                <span>{DropdownTeam} </span> Team management
              </li>
              <li>
                <span>{DropdownSetting} </span> Settings
              </li>
              <li>
                <span>{DropdownNeed} </span> Need Help?
              </li>
            </ul>
          ),
        },
        {
          key: '3',
          label: (
            <button>
              <span>{Logout} </span> Log out
            </button>
          ),
        },
      ]}
    />
  );

  const menutwo = (
    <Menu
      className="dropdown two"
      items={[
        {
          key: '1',
          label: (
            <div>
              <div className="Dropdown-head">
                <p>Notification</p>
              </div>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div className="naming2">
              <p>
                Dear Chibuzo, you have not verify your Email. Please click the
                link on the verification email sent to you. Click here to resend
                verification link.
              </p>
              <p>
                New project “GMA project” created. Click here to edit project
                details.
              </p>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <header>
      <div className="d-flex">
        <div className="col">
          <button className="search-button">
            <Image src={searchIcon} alt="learn AV" width={24} height={24} />
          </button>
          <input className="search" placeholder="Search" />
          <button className="cross">
            <Image src={cross} alt="learn AV" width={24} height={24} />
          </button>
        </div>
        <div className="col-auto ">
          <Dropdown overlay={menutwo}>
            <a onClick={e => e.preventDefault()}>
              <div className="notification">
                <Image
                  src={notification}
                  alt="notification"
                  objectFit="contain"
                  width={25}
                  height={30}
                />
                <span className="texts"> 2</span>
              </div>
            </a>
          </Dropdown>
        </div>
        <div className="header-name">
          <Dropdown overlay={menu}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                chibuzo
                <span>
                  <Image src={dropdown} alt="learn AV" width={8} height={6} />
                </span>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
