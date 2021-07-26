/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, HTMLAttributes } from 'react';

import { Props as NxFilterInputProps } from '../NxFilterInput/NxFilterInput';

export type FilterFn<T extends string | number = string> = (d: DataItem<T>[]) => DataItem<T>[];

export interface DataItem<T extends string | number = string> {
  id: T;
  displayName: string;
}

export interface TransferListItemProps<T extends string | number = string> extends DataItem<T> {
  checked: boolean;
  onChange: (checked: boolean, id: T) => void
}

export interface Props<T extends string | number = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  allItems: DataItem<T>[];
  selectedItems: Set<T>;
  availableItemsLabel?: ReactNode;
  selectedItemsLabel?: ReactNode;
  availableItemsCountFormatter?: (n: number) => string,
  selectedItemsCountFormatter?: (n: number) => string,
  showMoveAll?: boolean | null;
  availableItemsFilter: string;
  selectedItemsFilter: string;
  onAvailableItemsFilterChange: NxFilterInputProps['onChange'];
  onSelectedItemsFilterChange: NxFilterInputProps['onChange'];
  onChange: (newSelected: Set<T>) => void;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
}
