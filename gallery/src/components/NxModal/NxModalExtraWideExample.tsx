/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxButton} from '@sonatype/react-shared-components';

export default function NxModalExtraWideExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open wide modal</NxButton>
      {showModal &&
      <NxModal id="nx-modal-wide-example"
               variant="wide"
               onCancel={modalCloseHandler}
               aria-labelledby="modal-wide-header">
        <header className="nx-modal-header" id="modal-wide-header">
          <h2 className="nx-h2">Vulnerability Information</h2>
        </header>
        <div className="nx-modal-content">
          <p className="nx-p">This is some content inside a wider modal.</p>
        </div>
        <footer className="nx-footer">
          <div className="nx-btn-bar">
            <NxButton onClick={modalCloseHandler}>Close</NxButton>
          </div>
        </footer>
      </NxModal>
      }
    </>
  );
}
