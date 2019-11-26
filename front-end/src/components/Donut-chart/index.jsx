import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';
import expenseService from '../../services/expense-service';

import './Donut.css';

class DonutChartComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        expenseService.getByCategory()
            .then(res => {
                this.setState({ expenses: res.data});
            })
    }

    render() {
        const expenses = this.state.expenses.sort((a, b) => {
            return b.length - a.length;
        })
        console.log(expenses)
        return (
            <div className="donut-wrap">
                <DonutChart className="donut"
                    outerRadius="0.70"
                    innerRadius="0.55"
                    data={[
                        

                        // {
                        //     label: 'ReactJS',
                        //     value: 125,
                        // },
                        // {
                        //     label: 'AngularJS',
                        //     value: 275,
                        // },
                        // {
                        //     label: 'VueJS',
                        //     value: 15
                        // }
                    ]} />
            </div>
        )
    }
}

export default DonutChartComponent;
