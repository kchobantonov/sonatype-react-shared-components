/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import useMutationObserver from '@rooks/use-mutation-observer';
import classnames from 'classnames';

import { ColumnCountContext } from './contexts';

import { NxTableProps, nxTablePropTypes } from './types';
export { NxTableProps };

const mutationObserverConfig = { subtree: true, childList: true, attributes: false, characterData: false };

const NxTable = function NxTableElement(props: NxTableProps) {
  const {className, children, ...attrs} = props,
      tableRef = useRef<HTMLTableElement>(null),
      [columnCount, setColumnCount] = useState(1),
      updateColumnCount = useCallback(function updateColumnCount() {
        if (tableRef.current) {
          setColumnCount(tableRef.current.querySelectorAll('thead > tr:first-child > th').length);
        }
      }, []);

  useEffect(updateColumnCount, []);
  useMutationObserver(tableRef, updateColumnCount, mutationObserverConfig);

  return (
    <table ref={tableRef} className={classnames('nx-table', className)} {...attrs}>
      <ColumnCountContext.Provider value={columnCount}>
        {children}
      </ColumnCountContext.Provider>
    </table>
  );
};

NxTable.propTypes = nxTablePropTypes;

export default NxTable;
