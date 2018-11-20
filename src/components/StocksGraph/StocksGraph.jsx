/* eslint-disable */
import React, { Component } from 'react';
import { FlexibleXYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, XYPlot, FlexibleWidthXYPlot, Borders } from 'react-vis';
import { format } from 'd3-format';

import './StocksGraph.scss';

class StocksGraph extends Component {
  constructor() {
    super();
  }

  render() {

    // const { data } = this.props;

    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];

    console.log('data', data);

    return (
      <div styleName="container">
        <div styleName="border">
          <FlexibleWidthXYPlot
            xType="time"
            height={400}
            margin={{ left: 50 }}
          >
            <HorizontalGridLines style={{ stroke: '#fff' }} />
            <VerticalGridLines style={{ stroke: '#fff' }} />
            <LineSeries
              data={data}
              curve={'curveMonotoneX'}
            />
            <YAxis tickTotal={5} tickFormat={tick => format('.2s')(tick)} />
            <XAxis tickTotal={5} />
          </FlexibleWidthXYPlot>
        </div>
      </div >
    );
  }
}

export default StocksGraph;
