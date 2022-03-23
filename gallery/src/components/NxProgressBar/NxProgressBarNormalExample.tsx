/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxProgressBar } from '@sonatype/react-shared-components';

export default function NxProgressBarExample() {
  return (
    <>
      <div>
        0% Progress
        <NxProgressBar value={0}
                       label="0 of 10 cats fed."
        />
        <NxProgressBar value={0}
                       inlineCounter={true}
                       label="0 of 10 cats fed."
        />
      </div>
      <div>
        50% Progress
        <NxProgressBar value={50}
                       label="5 of 10 cats fed."
        />
        <NxProgressBar value={5}
                       max={10}
                       inlineCounter={true}
                       label="5 of 10 cats fed."
        />
      </div>
      <div>
        100% Progress (Success){' '}
        <NxProgressBar value={100}
                       label="10 of 10 cats fed."
                       labelSuccess="All cats fed!"
        />
        <NxProgressBar value={100}
                       label="10 of 10 cats fed."
                       labelSuccess="All cats fed!"
                       inlineCounter={true}
        />
      </div>
      <div>
        Error{' '}
        <NxProgressBar value={60}
                       hasError={true}
                       label="6 of 10 cats fed."
                       labelError="Something went wrong!"
        />
        <NxProgressBar value={50}
                       hasError={true}
                       label="5 of 10 cats fed."
                       labelError="Something went wrong!"
                       inlineCounter={true}
        />
      </div>
    </>
  );
}
