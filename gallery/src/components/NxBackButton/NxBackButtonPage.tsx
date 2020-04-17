/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';

import NxBackButtonSimpleExample from './NxBackButtonSimpleExample';
import NxBackButtonTitleExample from './NxBackButtonTitleExample';
import NxBackButtonTextExample from './NxBackButtonTextExample';
import CodeExample from '../../CodeExample';

const simpleSourceCode = require('!!raw-loader!./NxBackButtonSimpleExample').default;
const titleSourceCode = require('!!raw-loader!./NxBackButtonTitleExample').default;
const textSourceCode = require('!!raw-loader!./NxBackButtonTextExample').default;

const NxBackButtonPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>A standard UI element for navigating back to a previous page</p>
      <p>Props:</p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">targetPageTitle</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">The name of the page to navigate to</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">text</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">Optional custom text to override the back button's default text logic</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">href</td>
            <td className="nx-cell">URL</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">The URL to navigate to when the back button is clicked</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="Back button with no title or text specified">
      <NxBackButtonSimpleExample />
      <CodeExample content={simpleSourceCode} />
    </GalleryTile>
    <GalleryTile title="Back button with targetPageTitle specified">
      <NxBackButtonTitleExample />
      <CodeExample content={titleSourceCode} />
    </GalleryTile>
    <GalleryTile title="Back button with custom text specified">
      <NxBackButtonTextExample />
      <CodeExample content={textSourceCode} />
    </GalleryTile>
  </>;

export default NxBackButtonPage;