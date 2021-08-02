/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {NxListItemProps, nxListItemPropTypes} from './types';

const NxListItem = forwardRef<HTMLLIElement, NxListItemProps>(
    function NxListItem({ children, className, ...attrs }, ref) {
      const classNames = classnames('nx-list__item', className);
      return (
        <li ref={ref} className={classNames} {...attrs}>
          {children}
        </li>
      );
    }
);

NxListItem.propTypes = nxListItemPropTypes;

export default NxListItem;