import { Archive, ArrowDown, ArrowUp } from 'react-feather';
import './statsCard.scss';

export const StatsCard = () => {
  const stats = [
    {
      Icon: Archive,
      label: 'Total Orders',
      total: '75',
      percentage: 3,
      color: 'var(--blue)',
      bgColor: 'var(--blue-light)',
    },
    {
      Icon: Archive,
      label: 'Total Delivered',
      total: '70',
      percentage: -3,
      color: 'var(--green)',
      bgColor: 'var(--green-light)',
    },
    {
      Icon: Archive,
      label: 'Total Canceller',
      total: '05',
      percentage: 3,
      color: 'var(--red)',
      bgColor: 'var(--red-light)',
    },
    {
      Icon: Archive,
      label: 'Total Revenue',
      total: '$12k',
      percentage: -3,
      color: 'var(--pink)',
      bgColor: 'var(--pink-light)',
    },
  ];
  return (
    <div className='statsCard flex items-center'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className='card'
          style={{ '--icon': stat.color, '--icon-bg': stat.bgColor }}
        >
          <div className='icon flex justify-center items-center'>
            <stat.Icon />
          </div>
          <div className='label'>{stat.label}</div>
          <div className='detail flex justify-between items-end'>
            <div className='total'>{stat.total}</div>

            {stat.percentage > 0 ? (
              <div className='percentage flex items-center' style={{ color: 'var(--green)' }}>
                <ArrowUp /> {stat.percentage}%
              </div>
            ) : (
              <div className='percentage flex items-center' style={{ color: 'var(--red)' }}>
                <ArrowDown /> {-stat.percentage}%
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
