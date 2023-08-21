/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import {
  NxFontAwesomeIcon,
  NxStatefulCollapsibleRadioSelect,
  NxCollapsibleRadioSelectOption
} from '@sonatype/react-shared-components';

const NxStatefulCollapsibleRadioSelectExample = () => {
  const customNameElement = (
    <>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Bicycle</span>
    </>
  );

  const options = [
    {
      id: 'bike',
      name: customNameElement
    }, {
      id: 'motorcycle',
      name: 'Motorcycle'
    }, {
      id: 'skate',
      name: 'Skateboard'
    }, {
      id: 'moped',
      name: 'Moped'
    }, {
      id: null,
      name: 'No Transport'
    }
  ];

  const [selection, onSelectionChange] = useState<string | null>('motorcycle');

  function handleOptionTooltip(option: NxCollapsibleRadioSelectOption) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const name = typeof option.name === 'string' ? option.name : (option.name as any).props.children[1].props.children;
    return name;
  }

  return (
    <NxStatefulCollapsibleRadioSelect name="travel"
                                      id="stateful-travel"
                                      options={options}
                                      optionTooltipGenerator={handleOptionTooltip}
                                      selectedId={selection}
                                      onChange={onSelectionChange}
                                      filterPlaceholder="filter vehicle name"
                                      filterThreshold={3}>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Transportation</span>
    </NxStatefulCollapsibleRadioSelect>
  );
};

export default NxStatefulCollapsibleRadioSelectExample;
