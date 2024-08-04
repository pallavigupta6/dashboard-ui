import { ArrowUp } from 'react-feather';
import './app.scss';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { StatsCard } from './components/statsCard/statsCard';
import { Chart } from './components/chart/chart';
import { QuickActions } from './components/quickActions/quickAction';
import { Table } from './components/table/table';
import { Feedback } from './components/feedback/feedback';

function App() {
  return (
    <main className='main'>
      <aside className='sideNav'>
        <Sidebar />
      </aside>
      <main className='content'>
        <Header />
        <div className='dashboard'>
          <h1>Dashboard</h1>
          <div className='row flex items-center justify-between'>
            <div className='left'>
              <StatsCard />
            </div>
            <div className='right'>
              <div className='netProfit flex justify-between'>
                <div className='profit'>
                  <div className='title'>Net Profit</div>
                  <div className='actual flex items-center'>
                    <div className='dollar'>$</div> 6742.25
                  </div>
                  <div className='change flex items-center'>
                    <ArrowUp /> 3%
                  </div>
                </div>
                <div className='profitPercentage flex items-center flex-col justify-center'>
                  <div className='profitProgress'>
                    <div
                      className='radial-progress text-primary'
                      style={{ '--value': 70 }}
                      role='progressbar'
                    >
                      <div className='percentage'>70%</div>
                    </div>
                  </div>
                  <div className='desc'>*The values here are rounded off.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='row flex items-center justify-between'>
            <div className='left'>
              <Chart />
            </div>
            <div className='right'>
              <QuickActions />
            </div>
          </div>
          <div className='row flex items-center justify-between'>
            <div className='left'>
              <Table />
            </div>
            <div className='right'>
              <Feedback />
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

export default App;
