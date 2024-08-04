import { ChevronRight, Target } from 'react-feather';
import './quickAction.scss';

export const QuickActions = () => {
  return (
    <div className='quickActions flex flex-col'>
      <div className='quickAction flex justify-between items-center'>
        <div className='actionLeft flex items-center'>
          <div
            style={{ '--bg-color': 'var(--green-light)', '--color': 'var(--green)' }}
            className='icon flex items-center justify-center'
          >
            <Target />
          </div>
          <div className='text'>Goals</div>
        </div>
        <div className='actionRight'>
          <button className='btn btn-circle'>
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className='quickAction flex justify-between items-center'>
        <div className='actionLeft flex items-center'>
          <div
            style={{ '--bg-color': 'var(--blue-light)', '--color': 'var(--blue)' }}
            className='icon flex items-center justify-center'
          >
            <Target />
          </div>
          <div className='text'>Popular Dishes</div>
        </div>
        <div className='actionRight'>
          <button className='btn btn-circle'>
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className='quickAction flex justify-between items-center'>
        <div className='actionLeft flex items-center'>
          <div
            style={{ '--bg-color': 'var(--cyan-light)', '--color': 'var(--cyan)' }}
            className='icon flex items-center justify-center'
          >
            <Target />
          </div>
          <div className='text'>Menus</div>
        </div>
        <div className='actionRight'>
          <button className='btn btn-circle'>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
