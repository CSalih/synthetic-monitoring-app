import React from 'react';
import { Button, useStyles } from '@grafana/ui';
import { Probe } from 'types';
import { style } from './BulkEditModal';

interface Props {
  probes: Probe[];
  selectedProbes: Probe[];
  commonProbes: number[];
  addOrRemoveProbe: (probe: Probe) => void;
}

interface RegionMapping {
  [key: string]: Probe[];
}

interface ProbeButtonProps {
  probe: Probe;
  selectedProbes: Probe[];
  commonProbes: number[];
  addOrRemoveProbe: (probe: Probe) => void;
}

const ProbeButton = ({ probe, selectedProbes, commonProbes, addOrRemoveProbe }: ProbeButtonProps) => {
  const isCommonProbe = probe.id && commonProbes.includes(probe.id);

  return (
    <Button
      data-testid="probe-button"
      variant={selectedProbes?.includes(probe) ? 'primary' : 'secondary'}
      disabled={isCommonProbe ? true : false}
      size="sm"
      onClick={() => addOrRemoveProbe(probe)}
    >
      {probe.name}
    </Button>
  );
};

const ProbesByRegion = ({ probes, selectedProbes, commonProbes, addOrRemoveProbe }: Props) => {
  const styles = useStyles(style);

  // Group probes by region
  const probesByRegion = probes.reduce<RegionMapping>((acc, probe) => {
    const currentRegion: string = probe.region;

    if (typeof acc[currentRegion] === 'undefined') {
      acc[currentRegion] = [];
    }
    acc[currentRegion].push(probe);

    return acc;
  }, {});

  return (
    <div className={styles.probesWrapper}>
      <div>
        {Object.keys(probesByRegion).map((region: string) => {
          return (
            <React.Fragment key={region}>
              <h5>{region}</h5>
              <div className={styles.buttonGroup}>
                {probesByRegion[region].map((p) => {
                  return (
                    <ProbeButton
                      key={p.id}
                      probe={p}
                      selectedProbes={selectedProbes}
                      commonProbes={commonProbes}
                      addOrRemoveProbe={addOrRemoveProbe}
                    />
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProbesByRegion;
