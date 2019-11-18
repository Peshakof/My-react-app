import React from 'react';
// import Chart from '../Horizontal-chart/Chart';
import DonutChart from '../Donut-chart/Donut';

import './Dashboard.css';

function Dashboard() {
    return (
    <div className="Dashboard">    
        <section className="table-wrap">
            {/* for demo wrap */}
            <h1>Expenses history</h1>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Merchant</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        <tr>
                            <td>11.06.2019</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>ala bala</td>
                            <td>65.5 lv</td>
                        </tr>
                        <tr>
                            <td>11.07.2019</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>+2.36%</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </section>
        {/* <Chart /> */}
        <DonutChart />
    </div>    
    )
}

export default Dashboard;