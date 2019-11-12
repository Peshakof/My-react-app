import React from 'react';
import './Chart.css';

function Chart() {

    return(
        <div className="Chart">
            <div className="container">
                <h3>Horizontal Bar Chart</h3>
                <div className="chart chart-bar chart-horizontal">
                    <p>
                        <span className="category">Bills: </span>
                        <span className="metric" style={{ width: 10 }}>4</span>
                    </p>
                    <p>
                        <span className="category">Rents: </span>
                        <span className="metric" style={{width:24}}>24</span>
                    </p>
                    <p>
                        <span className="category">Pet</span>
                        <span className="metric" style={{width: 17}}>17</span>
                    </p>
                    <p>
                        <span className="category">Entertainment</span>
                        <span className="metric" style={{width: 10}}>10</span>
                    </p>
                    <p>
                        <span className="category">Pizza</span>
                        <span className="metric" style={{width: '90%'}}>25</span>
                    </p>
                    <p>
                        <span className="category">Cinema</span>
                        <span className="metric" style={{width: '70%'}}>30</span>
                    </p>
                </div>
            </div>
        </div>    
    )
}

export default Chart;