import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star
} from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

function Sidebar () {
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <Button
        onClick={() => dispatch(openSendMessage())}
        variant='outlined'
        startIcon={<Add fontSize='large' />}
        className='sidebar__compose'
      >
        Compose
      </Button>

      <SidebarOptions title='Inbox' Icon={Inbox} count={20} selected />
      <SidebarOptions title='Starred' Icon={Star} count={100} />
      <SidebarOptions title='Snoozed' Icon={AccessTime} count={100} />
      <SidebarOptions title='Important' Icon={LabelImportant} count={100} />
      <SidebarOptions title='Sent' Icon={NearMe} count={100} />
      <SidebarOptions title='Drafts' Icon={Note} count={100} />
      <SidebarOptions title='More' Icon={ExpandMore} count={100} />

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <Person />
          </IconButton>

          <IconButton>
            <Duo />
          </IconButton>

          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
