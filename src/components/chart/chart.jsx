import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './chart.scss';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Chart = () => {
  return (
    <div className='chart'>
      <Bar
        data={{
          labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
          datasets: [
            {
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000)),
              label: 'Activity',
              backgroundColor: '#737fff',
              borderWidth: 0,
              borderRadius: Number.MAX_VALUE,
              borderSkipped: false,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Activity',
            },
            legend: {
              display: false,
            },
          },
        }}
      ></Bar>
    </div>
  );
};
