/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

/**
 * If an array is passed in, returns an equivalent array.
 * If a value that is not an array is passed in, returns an array containing only that value
 */
export function ensureArray<T>(items: T | T[]): T[] {
  return Array.isArray(items) ? items : [items];
}

/**
 * Returns a random number between specified ranges.
 * @param {number} min - starting range
 * @param {number} max - ending range
 * @param {number} decimalPlaces - precision for generated number
 */
export const randomNumberGenerator = (min: number, max: number, decimalPlaces: number) => {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
};
