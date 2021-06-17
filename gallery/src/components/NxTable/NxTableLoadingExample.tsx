/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';

import { NxTable } from '@sonatype/react-shared-components';

const NxTableLoadingExample = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => { clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 100);

    return () => { clearTimeout(timeout); };
  }, []);

  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell>Header 1</NxTable.Cell>
          <NxTable.Cell>Header 2</NxTable.Cell>
          <NxTable.Cell>Header 3</NxTable.Cell>
          <NxTable.Cell isNumeric>Header 4</NxTable.Cell>
          <NxTable.Cell>Header 5</NxTable.Cell>
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body isLoading={loading} emptyMessage="This is empty"/>
    </NxTable>
  );
};

export default NxTableLoadingExample;
