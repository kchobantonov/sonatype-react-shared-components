/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, ValidationMap } from 'react';
import * as PropTypes from 'prop-types';

interface ProductInfo {
  name: string;
  version? : string | null;
}

interface HeaderLink {
  name: string;
  href: string;
}

export interface Props {
  links?: HeaderLink[] | null
  homeLink?: string | null;
  productInfo?: ProductInfo | null;
  children?: ReactNode | null;
}

export const propTypes: ValidationMap<Props> = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired),
  homeLink: PropTypes.string,
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string
  })
};