import { BarChart2, Briefcase, Clipboard, Home, Layout, LogOut, ShoppingBag } from 'react-feather';
import './sidebar.scss';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='menu'>
        <div className='menuItem start'>
          <Layout />
        </div>
        <div className='menuItem current'>
          <Home />
        </div>
        <div className='menuItem'>
          <BarChart2 />
        </div>
        <div className='menuItem'>
          <Clipboard />
        </div>
        <div className='menuItem'>
          <Briefcase />
        </div>
        <div className='menuItem'>
          <ShoppingBag />
        </div>
        <div className='menuItem end'>
          <LogOut />
        </div>
      </div>
    </div>
  );
};
