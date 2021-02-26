/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxPageHeader, NxFontAwesomeIcon, NxDropdown, useToggle } from '@sonatype/react-shared-components';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';
import GalleryNav from './GalleryNav';

import packageJson from '../package.json';

function PageHeader() {
  const productInfo = {
    name: 'React Shared Component Library',
    version: packageJson.version
  };
  const [isOpen, onToggleCollapse] = useToggle(false);
  const labelElement = <><NxFontAwesomeIcon icon={faHamburger}/></>;

  return <NxPageHeader homeLink="#" productInfo={productInfo}>
    <NxDropdown label={labelElement}
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}
                className="nx-page__hamburger mobile">
      <GalleryNav />
    </NxDropdown>
  </NxPageHeader>;
};

export default PageHeader;
