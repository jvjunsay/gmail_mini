import {
  Search,
  Menu,
  ArrowDropDown,
  Apps,
  Notifications,
} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import './Header.css';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <Menu />
        </IconButton>
        <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' />
      </div>
      <div className='header__middle'>
        <Search />
        <input placeholder='Search All Conversations' type='text' />
        <ArrowDropDown className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar onClick={signout} src={user?.photo} />
      </div>
    </div>
  );
}

export default Header;
