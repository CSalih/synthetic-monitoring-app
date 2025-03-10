import { GrafanaTheme2 } from '@grafana/data';
import { Icon, useStyles2 } from '@grafana/ui';
import { SuccessRateContext } from 'contexts/SuccessRateContext';
import React, { useContext } from 'react';
import { Check } from 'types';
import { css } from '@emotion/css';
import { getSuccessRateIcon } from 'utils';

interface Props {
  width: number;
  height: number;
  hexRadius: number;
  hexCenters: Array<[number, number]>;
  checks: Check[];
}

const getStyles = (theme: GrafanaTheme2) => ({
  container: css`
    position: absolute;
    pointer-events: none;
  `,
  icon: css`
    position: absolute;
    color: black;
  `,
});

export const IconOverlay = ({ width, height, hexCenters, hexRadius, checks }: Props) => {
  const { values: successRates, thresholds } = useContext(SuccessRateContext);
  const styles = useStyles2(getStyles);

  return (
    <div
      className={styles.container}
      style={{
        width,
        height,
      }}
    >
      {hexCenters.map(([x, y], index) => {
        const icon = getSuccessRateIcon(
          thresholds,
          'reachability',
          successRates.checks?.[checks[index]?.id ?? 0]?.reachabilityValue
        );

        return (
          <Icon
            key={index}
            name={icon}
            className={styles.icon}
            style={{
              left: x + hexRadius - 7, // Subtract 7 because it's half the width of the icon element
              top: y + hexRadius - 7, // Subtract 7 because it's half the width of the icon element
            }}
          />
        );
      })}
    </div>
  );
};
