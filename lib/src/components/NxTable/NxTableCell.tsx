/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';
import { faSort, faSortDown, faSortUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {ensureElement} from '../../util/reactUtil';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { NxTableCellProps, nxTableCellPropTypes } from './types';
import { HeaderContext } from './contexts';
export { NxTableCellProps };

const NxTableCell = function NxTableCell(props: NxTableCellProps) {
  const {
        metaInfo = false,
        isNumeric = false,
        isSortable = false,
        hasIcon = false,
        chevron = false,
        sortDir,
        className,
        children,
        ...attrs
      } = props,
      isHeader = useContext(HeaderContext);

  const classes = classnames('nx-cell', className, {
    'nx-cell--header': isHeader,
    'nx-cell--meta-info': metaInfo,
    'nx-cell--num': isNumeric,
    'nx-cell--icon': hasIcon,
    'nx-cell--chevron': chevron,
    'nx-cell--sortable': isSortable
  });

  let maskedSort;
  if (sortDir === 'asc') {
    maskedSort = (
      <>
        <NxFontAwesomeIcon icon={faSortDown} />
        <NxFontAwesomeIcon icon={faSortUp} />
      </>
    );
  }
  else if (sortDir === 'desc') {
    maskedSort = (
      <>
        <NxFontAwesomeIcon icon={faSortUp} />
        <NxFontAwesomeIcon icon={faSortDown} />
      </>
    );
  }
  else {
    maskedSort = <NxFontAwesomeIcon icon={faSort} />;
  }

  const Tag = isHeader ? 'th' : 'td';

  return (
    <Tag className={classes} {...attrs}>
      { (chevron && !isHeader) ?
        <NxFontAwesomeIcon icon={faChevronRight}/> :
        <>
          {ensureElement(children)}
          {isSortable && <span className="nx-cell__sort-icons fa-layers">{maskedSort}</span>}
        </>
      }
    </Tag>
  );
};

NxTableCell.propTypes = nxTableCellPropTypes;

export default NxTableCell;