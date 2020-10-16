/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { Props, propTypes } from './types';
export { Props } from './types';

import './NxBinaryDonutChart.scss';

const NxBinaryDonutChart = forwardRef<SVGSVGElement, Props>(
    function NxBinaryDonutChart(props, ref) {
      const innerRadiusPercent = props.innerRadiusPercent === 0 ? props.innerRadiusPercent :
        (props.innerRadiusPercent || 50);

      const strokeWidth = 100 - innerRadiusPercent;
      const r = innerRadiusPercent + (strokeWidth / 2);

      // add 0.5π because we want the angle from the top of the circle, not the right
      const arcEndAngle = (props.percent / 100) * 2 * Math.PI + 0.5 * Math.PI;
      const arcEndX = (Math.cos(arcEndAngle) * r);
      const arcEndY = Math.sin(arcEndAngle) * r;

      // note: this doesn't behave as expected when percent = 0 or 100 hence the special cases in the rendering below
      const largeArc = props.percent > 50 ? 1 : 0;

      return (
        <svg ref={ref} viewBox="-100 -100 200 200" {...props}>
          <circle className="nx-binary-donut-chart-circle"
                  strokeWidth={strokeWidth}
                  r={r}>
          </circle>
          { props.percent > 0 && props.percent < 100 &&
            <path d={`M0,-${r} A${r},${r},0,${largeArc},0,${arcEndX},${arcEndY}`}
                  fill="none"
                  stroke="blue"
                  stroke-width={strokeWidth}/>
          }
          { props.percent === 100 &&
            <circle stroke="blue" strokeWidth={strokeWidth} fill="none" r={r}/>
          }
        </svg>
      );
    }
);

NxBinaryDonutChart.propTypes = propTypes;

export default NxBinaryDonutChart;
