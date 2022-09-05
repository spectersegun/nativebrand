import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dash from '../public/icons/dash.svg';
import stack from '../public/icons/stack.svg';
import createProject from '../public/icons/createProject.svg';
import copy from '../public/icons/copy.svg';
import user from '../public/icons/users.svg';
import contacts from '../public/icons/contacts.svg';
import learn1 from '../public/icons/learn1.svg';
import play from '../public/icons/Play.svg';
import sun from '../public/icons/sun.svg';

import { Switch } from 'antd';

export default function Aside() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  return (
    <aside className="aside">
      <div className="desktop d-none d-md-flex">
        <div className="aside-top">
          <h2>
            <span className="our-orange">AV</span> DESIGNER
          </h2>

          <ul>
            <li className="active">
              <Link href="#">
                <a>
                  <Image
                    src={dash}
                    alt="Dashboard"
                    width={24}
                    height={24}
                    style={{ marginRight: '12px' }}
                  />
                  <span className="text-nav">Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src={createProject}
                    alt="Create Project"
                    width={24}
                    height={24}
                    style={{ marginRight: '12px' }}
                  />
                  <span className="text-nav">Create Project</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src={stack}
                    alt="All Projects"
                    width={24}
                    height={24}
                    style={{ marginRight: '12px' }}
                  />
                  <span className="text-nav">All Projects</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src={copy}
                    alt="Proposals"
                    width={24}
                    height={24}
                    style={{ marginRight: '12px' }}
                  />
                  <span className="text-nav">Proposals</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src={user}
                    alt="Clients"
                    width={24}
                    height={24}
                    style={{ marginRight: '12px' }}
                  />
                  <span className="text-nav">Clients</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src={contacts}
                    alt="All Contacts"
                    width={24}
                    height={24}
                    style={{ marginRight: '12px' }}
                  />
                  <span className="text-nav">All Contacts</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="aside-bottom">
          <hr />
          <div className="learning">
            <div>
              <Image
                src={learn1}
                alt="learn AV"
                width={24}
                height={24}
                objectFit="contain"
                style={{ marginRight: '12px' }}
              />
              <span className="text-nav first">Learn AV Designer</span>
            </div>

            <div>
              <Image
                src={play}
                alt="learn AV"
                width={24}
                height={24}
                objectFit="contain"
                style={{ marginRight: '12px' }}
              />
              <span className="text-nav">Tutorials</span>
            </div>

            <div className="help-center">
              <p>Need Help?</p>
              <small>Get Support/Feedback</small>
            </div>
          </div>
          <div className="light-mode">
            <Image
              src={sun}
              alt="learn AV"
              width={24}
              height={24}
              style={{ marginRight: '12px' }}
            />
            <Switch defaultChecked onChange={onChange} />
          </div>
        </div>
      </div>
    </aside>
  );
}
