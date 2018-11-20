import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import './StocksGraph.scss';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dev',
];

const dateFormatter = (date) => {
  const time = new Date(date);
  const month = time.getMonth();
  const day = time.getDate();

  return `${months[month]} ${day}`;
};

class StocksGraph extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { data } = this.props;
    return (
      <div styleName="container">
        <div styleName="padding">
          <VictoryChart height={200}>
            <VictoryAxis
              scale="time"
              tickFormat={x => dateFormatter(x)}

            />
            <VictoryAxis // y
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={x => (`$${x / 1000}k`)}
            />
            <VictoryLine
              interpolation="monotoneX"
              data={data}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default StocksGraph;
