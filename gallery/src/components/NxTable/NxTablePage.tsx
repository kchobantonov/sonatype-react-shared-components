/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryExampleTile} from '../../gallery-components/GalleryTiles';


import NxTableLoadingExample from './NxTableLoadingExample';
const tableLoadingExample = require('./NxTableLoadingExample?raw');

import './NxTablePaginationExample.scss';
import './NxTablePaginationFilterExample.scss';

export default function NxTablePage() {
  return (
    <>
      <GalleryExampleTile title="Loading Example"
                          id="nx-table-loading-example"
                          liveExample={NxTableLoadingExample}
                          codeExamples={tableLoadingExample}>
        An example of how <code className="nx-code">NxTable</code> should be used while its data is loading.
      </GalleryExampleTile>
    </>
  );
}
