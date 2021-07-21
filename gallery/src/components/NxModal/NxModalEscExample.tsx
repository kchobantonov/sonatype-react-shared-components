/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState, useEffect} from 'react';

import {NxModal, NxFontAwesomeIcon, NxButton, NxDropdown, NxP, useToggle} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalStackedExample() {
  const [showModal, setShowModal] = useState(false),
      [showModal2, setShowModal2] = useState(false),
      [showDropdown, toggleDropdown, setShowDropdown] = useToggle(false),
      [showCustomComponent, setShowCustomComponent] = useState(false),
      modal1CancelHandler = () => {
        setShowModal(false);
        setShowDropdown(false);
      },
      modal2CancelHandler = () => setShowModal2(false);

  function customComponentKeydownListener(evt: KeyboardEvent) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      setShowCustomComponent(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', customComponentKeydownListener);
    return () => { document.removeEventListener('keydown', customComponentKeydownListener); };
  }, []);

  return (
    <>
      <NxButton id="esc-example-initial-btn"
                onClick={() => setShowCustomComponent(true)}>
        Open Custom Expandable Panel
      </NxButton>
      {showCustomComponent &&
        <div className="gallery-custom-expandable">
          <NxP>Press ESC anywhere on the page to close me!</NxP>
          <NxButton onClick={() => setShowModal(true)}>Open Modal 1</NxButton>
        </div>
      }
      {showModal &&
        <NxModal id="nx-modal-esc-example-modal" onCancel={modal1CancelHandler} aria-labelledby="modal-esc-header">
          <header className="nx-modal-header">
            <h2 className="nx-h2" id="modal-esc-header">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>NxModal with a dropdown that opens another modal</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <NxDropdown label="Click to Expand"
                        isOpen={showDropdown}
                        onToggleCollapse={toggleDropdown}
                        onCloseClick={evt => evt.preventDefault()}>
              <button onClick={() => setShowModal2(true)} className="nx-dropdown-button">
                Open Modal 2
              </button>
            </NxDropdown>
            <NxP>
              Some other content to take up space…
            </NxP>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={modal1CancelHandler}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
      {showModal2 &&
        <NxModal id="nx-modal-esc-example-modal2" onCancel={modal2CancelHandler} aria-labelledby="modal-esc-header2">
          <header className="nx-modal-header">
            <h2 className="nx-h2" id="modal-esc-header2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>NxModal stacked example</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <p className="nx-p">This is the second modal.</p>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={modal2CancelHandler} variant="primary">Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
}
