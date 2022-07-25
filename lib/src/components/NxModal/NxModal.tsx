/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useContext} from 'react';
import classnames from 'classnames';

import withClass from '../../util/withClass';
import {CloseHandler, Props, propTypes} from './types';

import { pick, omit } from 'ramda';

import AbstractDialog, { AbstractDialogContext } from '../AbstractDialog/AbstractDialog';

import './NxModal.scss';

export const NxModalContext = React.createContext<HTMLDialogElement | null>(null);

// propTypes static analysis doesn't work with the way this component is written
/* eslint-disable react/prop-types */
const _NxModal: FunctionComponent<Props> = ({ className, onClose, onCancel = onClose, variant, role, ...attrs }) => {
  const modalClasses = classnames('nx-modal', className, {
    'nx-modal--wide': variant === 'wide',
    'nx-modal--narrow': variant === 'narrow'
  });
  const dialogContext = useContext(AbstractDialogContext);

  const ariaLabelAttrNames = ['aria-label', 'aria-labelledby'] as const,
      ariaLabels = pick(ariaLabelAttrNames, attrs),
      attrsWithoutLabels = omit([...ariaLabelAttrNames, 'tabIndex'], attrs);

  return (
    <AbstractDialog role={role || 'dialog'}
                    aria-modal="true"
                    className="nx-modal-backdrop"
                    tabIndex={-1}
                    onCancel={onCancel as CloseHandler}
                    {...ariaLabels}>
      <NxModalContext.Provider value={dialogContext && dialogContext.dialogEl}>
        <div className={modalClasses} {...attrsWithoutLabels}/>
      </NxModalContext.Provider>
    </AbstractDialog>
  );
};

const NxModal = Object.assign(_NxModal, {
  propTypes,
  Header: withClass('header', 'nx-modal-header'),
  Content: withClass('div', 'nx-modal-content')
});

export default NxModal;
export {Props} from './types';
