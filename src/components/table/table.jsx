import { Tags } from '../tags/tags';
import './table.scss';

export const Table = () => {
  return (
    <div className='recentOrders'>
      <div className='title'>Recent Orders</div>
      <div className='tableContainer'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-12 w-12'>
                      <img
                        src='https://img.daisyui.com/images/profile/demo/2@94.webp'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className='badge badge-ghost badge-sm'>Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <Tags>Delivered</Tags>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-12 w-12'>
                      <img
                        src='https://img.daisyui.com/images/profile/demo/3@94.webp'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Brice Swyre</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className='badge badge-ghost badge-sm'>Tax Accountant</span>
              </td>
              <td>Red</td>
              <th>
                <Tags>Delivered</Tags>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-12 w-12'>
                      <img
                        src='https://img.daisyui.com/images/profile/demo/4@94.webp'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Marjy Ferencz</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className='badge badge-ghost badge-sm'>Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <th>
                <Tags color='red'>Cancelled</Tags>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-12 w-12'>
                      <img
                        src='https://img.daisyui.com/images/profile/demo/5@94.webp'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Yancy Tear</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className='badge badge-ghost badge-sm'>Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <th>
                <Tags color='red'>Cancelled</Tags>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
