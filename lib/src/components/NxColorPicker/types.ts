/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { FieldsetHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

import { SelectableColor, selectableColors } from '../../util/selectableColors';

export interface Props extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  selectedColor: SelectableColor;
  onChange?: ((currentValue: SelectableColor) => void) | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  selectedColor: PropTypes.oneOf(selectableColors).isRequired,
  onChange: PropTypes.func
};
