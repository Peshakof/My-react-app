import React from 'react';
import DonutChart from 'react-donut-chart';
import './Donut.css';

function DonutChartComponent() {
    return (
        <div className="donut-wrap">
            <DonutChart className="donut"
                outerRadius="0.70"
                innerRadius="0.55"
                data={[
                    {
                        label: 'ReactJS',
                        value: 125,
                    },
                    {
                        label: 'AngularJS',
                        value: 275,
                    },
                    {
                        label: 'VueJS',
                        value: 15
                    }
                ]} />
        </div>
    )
}

export default DonutChartComponent;
