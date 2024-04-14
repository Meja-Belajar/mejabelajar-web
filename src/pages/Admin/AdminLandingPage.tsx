import React from 'react';
import { motion } from 'framer-motion';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { initial, animate, exit } from '@src/assets/PageTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faBullhorn, faCalendar, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@nextui-org/react';

const adminData = {
  name: 'John Doe',
  email: '',
  role: 'admin',
  status: 'active',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
};

const allBookings = [
  {
    id: 1,
    name: 'John Doe',
    email: '',
    status: 'active',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
]

const AdminLandingPage = () => {
  const { announcement } = useParams();
  const navigate = useNavigate();

  return (
    <> 
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className='w-full border border-black'
      >  

        <nav className='w-[calc(100% - 1%)] m-[1%]'>
          <div className='flex flex-row items-center'>
            <div className='m-1 px-3 rounded-2xl py-2  w-fit'>
              <Button
                className='m-1 text-white mr-3'
                startContent={<FontAwesomeIcon icon={faCalendar} />}
                style={{
                  backgroundColor: announcement !== 'announcement' ? '#B46EFB' : '#cccbc8',
                }}
                onClick={() => {
                  navigate('/admin/');
                }}
              >
                Overview
              </Button>
              <Button
                className='m-1 text-white'
                startContent={<FontAwesomeIcon icon={faBullhorn} />}
                style={{
                  backgroundColor: announcement === 'announcement' ? '#B46EFB' : '#cccbc8',
                }}
                onClick={() => {
                  navigate('/admin/announcement');
                }}
              >
                Announcement
              </Button>
              <Button
                className='m-1 text-white bg-red-500 ml-3'
                startContent={<FontAwesomeIcon icon={faRightFromBracket} />}
                onClick={() => {
                  
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </nav>

        <Outlet />
      </motion.div>
    </>
  )
}

export default AdminLandingPage;