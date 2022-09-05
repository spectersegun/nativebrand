import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dash from '../public/icons/dash.svg';
import stack from '../public/icons/stack.svg';
import createProject from '../public/icons/createProject.svg';
import copy from '../public/icons/copy.svg';
import user from '../public/icons/users.svg';
import contacts from '../public/icons/contacts.svg';
import learn1 from '../public/icons/learn1.svg';
import play from '../public/icons/Play.svg';
import sun from '../public/icons/sun.svg';

import styles from '../styles/Home.module.css';
import { Switch } from 'antd';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { summaryIcon, Toggler } from '../public/Svg/Svg';
import Graph from './Graph';
import Card from './Card';

export default function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <main className={styles.main}>
        <div className="drawer d-block d-md-none">
          <Button onClick={handleShow} className="toggler">
            {Toggler}
          </Button>
        </div>

        <Card />
        <section className="row section-two">
          <div className="col-lg-6 d-none d-md-block">
            <div style={{ height: '100%' }}>
              <div className="table-wrapper summary-chart">
                <div class="table-caption">
                  <p>Overall Summary</p>{' '}
                  <div>
                    <span>Annual</span> <span>{summaryIcon}</span>
                  </div>
                </div>
                <div className="d-flex align-itms-center justify-content-cneter">
                  <Graph />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <div className="table-wrapper">
                <div class="table-caption">My Recent Designs</div>

                <table>
                  <thead>
                    <tr>
                      <th>Design Name</th>
                      <th>% Progress</th>
                      <th>Estimate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create BOM Project</td>
                      <td>100%</td>
                      <td>N2,500,000</td>
                    </tr>
                    <tr>
                      <td>Hausba CONFERENCE HALL</td>
                      <td>80%</td>
                      <td>N1,250,800</td>
                    </tr>
                    <tr>
                      <td>New NASS AUDITORIUM</td>
                      <td>50%</td>
                      <td>N7,500,000</td>
                    </tr>
                    <tr>
                      <td>UniAbuja Ultra Morden LECTURE HALL</td>
                      <td>100%</td>
                      <td>N5,500,000</td>
                    </tr>
                    <tr>
                      <td>Kilmanjaro CAFETERIA</td>
                      <td>100%</td>
                      <td>N2,500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="row section-three">
          <div className="col-lg-8">
            <div>
              <div className="table-wrapper">
                <div class="table-caption">My Recent Projects</div>

                <table>
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Project No</th>
                      <th>Date</th>
                      <th>Client </th>
                      <th>Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Villa F25 Project</td>
                      <td>P-101</td>
                      <td>12/01/2018</td>
                      <td>Your client name1 </td>
                      <td>$55,000</td>
                    </tr>
                    <tr>
                      <td>GMA Residence Project</td>
                      <td>P-102</td>
                      <td>22/01/2019</td>
                      <td>Your client name2 </td>
                      <td>$25,000</td>
                    </tr>
                    <tr>
                      <td>Banana Mansion Project</td>
                      <td>P-103</td>
                      <td>10/02/2020</td>
                      <td>Your client name3 </td>
                      <td>$65,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <div className="table-wrapper">
                <div class="table-caption">My Recent Proposals</div>
                <table>
                  <thead>
                    <tr>
                      <th>Proposal Name</th>
                      <th>Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Villa F25 project proposal</td>
                      <td>$25,000,000</td>
                    </tr>
                    <tr>
                      <td>Hausba CONFERENCE HALL</td>
                      <td>$32,000,000</td>
                    </tr>
                    <tr>
                      <td>New NASS AUDITORIUM</td>
                      <td>$15,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <aside className="aside mobile">
            <div className="desktop d-md-flex">
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
