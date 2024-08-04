import './tags.scss';

export const Tags = ({ color = 'green', children }) => {
  const colorMap = {
    green: {
      '--color': 'var(--green)',
      '--bg-color': 'var(--green-light)',
    },
    red: {
      '--color': 'var(--red)',
      '--bg-color': 'var(--red-light)',
    },
  };
  return (
    <div style={{ ...colorMap[color] }} className='tag'>
      {children}
    </div>
  );
};
