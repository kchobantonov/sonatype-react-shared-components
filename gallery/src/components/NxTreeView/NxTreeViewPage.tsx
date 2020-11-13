/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTreeViewExample from './NxTreeViewExample';
import NxTreeViewTooltipExample from './NxTreeViewTooltipExample';
import NxTreeViewExtras from './NxTreeViewExtrasExample';
import NxTreeViewClickable from './NxTreeViewClickableExample';
import NxTreeViewClickableSidebar from './NxTreeViewClickableSidebarExample';
import NxTreeViewCheckbox from './NxTreeViewCheckboxExample';
import NxTreeViewEmpty from './NxTreeViewEmptyExample';
import NxTreeViewDisabled from './NxTreeViewDisabledExample';

const nxTreeViewCode = require('!!raw-loader!./NxTreeViewExample').default,
    nxTreeViewTooltipCode = require('!!raw-loader!./NxTreeViewTooltipExample').default,
    nxTreeViewExtrasCode = require('!!raw-loader!./NxTreeViewExtrasExample').default,
    nxTreeViewClickableCode = require('!!raw-loader!./NxTreeViewClickableExample').default,
    nxTreeViewClickableSidebarCode = require('!!raw-loader!./NxTreeViewClickableSidebarExample').default,
    nxTreeViewCheckboxCode = require('!!raw-loader!./NxTreeViewCheckboxExample').default,
    nxTreeViewEmptyCode = require('!!raw-loader!./NxTreeViewEmptyExample').default,
    nxTreeViewDisabledCode = require('!!raw-loader!./NxTreeViewDisabledExample').default;

const NxTreeViewPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A set of default styles and basic React for an expanding tree view.
      </p>

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
            <td className="nx-cell">id</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Id to assign to the tree view element
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isOpen</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Controls whether the tree view is open or closed. Default is false.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Controls whether the tree view should be rendered as disabled or not. Default is false.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">triggerContent</td>
            <td className="nx-cell">VirtualDOM</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The content of the tree view trigger. While not strictly speaking required if there is no content then
              nothing but the caret icon will appear.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">triggerTooltip</td>
            <td className="nx-cell">string | NxTooltip Props</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If present, describes a tooltip to be places on the tree view's trigger element. There are two ways
              to specify the tooltip: the simpler way is to simply specify the tooltip text as a string. If control
              of more complex tooltip options is desired, an object can be passed which will serve as the props for
              NxTooltip
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">className</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">Classes to apply to the root element</td>
          </tr>
        </tbody>
      </table>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Children</h3>
        </header>
        <p className="nx-p">
          The "children" of an <code className="nx-code">NxTreeView</code> are the elements which appear when the
          tree view is expanded.
          There are essentially three different types of children supported
          within <code className="nx-code">NxTreeView</code> as described below.
        </p>
        <ul className="nx-list">
          <li className="nx-list__item">
            <span className="nx-list__text">Clickable/selectable children</span>
            <span className="nx-list__subtext">
              Links (<code className="nx-code">&lt;a&gt;</code> tags)
              and <code className="nx-code">&lt;button&gt;</code>s should be provided as direct child elements and
              given the <code className="nx-code">.nx-tree-view__child</code> class. They should <em>not</em> be
              wrapped in an extra <code className="nx-code">&lt;div&gt;</code> or anything else. When constructing
              a navigation list within an <code className="nx-code">NxTreeView</code>, the link representing the
              current page should also be given the <code className="nx-code">.selected</code> class.
            </span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Radio/Checkbox children</span>
            <span className="nx-list__subtext">
              When constructing an <code className="nx-code">NxTreeView</code> whose children are checkboxes or
              radios, for instance to create a filter sidebar, the <code className="nx-code">NxRadio</code>{' '}
              and <code className="nx-code">NxCheckbox</code> components should be direct children of
              the <code className="nx-code">NxTreeView</code>. They should <em>not</em> be given
              the <code className="nx-code">.nx-tree-view__child</code> class.
            </span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Non-interactive or other children</span>
            <span className="nx-list__subtext">
              Child elements which contain non-interactive or general content which does not fit into the above
              categories can simply be placed in a <code className="nx-code">&lt;div&gt;</code> with
              the <code className="nx-code">.nx-tree-view__child</code> class. For convenience,
              a <code className="nx-code">NxTreeViewChild</code> react component is provided which creates such
              a <code className="nx-code">&lt;div&gt;</code>.
            </span>
          </li>
        </ul>
      </section>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxTreeView Basic Example"
                        liveExample={NxTreeViewExample}
                        codeExamples={nxTreeViewCode}>
      A basic example of an <code className="nx-code">NxTreeView</code> with the corresponding logic necessary to
      track its collapse/expand state.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Example with trigger tooltip"
                        liveExample={NxTreeViewTooltipExample}
                        codeExamples={nxTreeViewTooltipCode}>
      Examples of <code className="nx-code">NxTreeView</code>s with tooltips configured on their triggers. The first
      example uses a simple string for the tooltip while the second example demonstrates a more custom tooltip
      configuration.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Example with Extras"
                        id="nx-tree-view-example"
                        liveExample={NxTreeViewExtras}
                        codeExamples={nxTreeViewExtrasCode}>
      These examples demonstrate <code className="nx-code">NxTreeView</code>s with extra content such as icons and
      <code className="nx-code">nx-counter</code>s in their triggers. Note that the last example also demonstrates
      text overflow behavior
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Clickable Example"
                        id="nx-tree-view-clickable-example"
                        liveExample={NxTreeViewClickable}
                        codeExamples={nxTreeViewClickableCode}>
      Example of an <code className="nx-code">NxTreeView</code> with clickable children one of which is selected
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Clickable Sidebar Example"
                        id="nx-tree-view-clickable-sidebar-example"
                        liveExample={NxTreeViewClickableSidebar}
                        codeExamples={nxTreeViewClickableSidebarCode}>
      Example of an <code className="nx-code">NxTreeView</code> with clickable children one of which is selected.
      This example differs from the previous one in that the tree view is contained within
      an <code className="nx-code">.nx-page-sidebar</code>. <code className="nx-code">NxTreeView</code>s that are
      descendants of sidebars use different colors for their hover and selected states.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Checkbox and radio Example"
                        id="nx-tree-view-checkbox-example"
                        liveExample={NxTreeViewCheckbox}
                        codeExamples={nxTreeViewCheckboxCode}>
      Example showing how to construct <code className="nx-code">NxTreeView</code>s with checkboxes and radios as
      children. This example omits the input state management and is focused on demonstrating the styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Empty Example"
                        id="nx-tree-view-empty-example"
                        liveExample={NxTreeViewEmpty}
                        codeExamples={nxTreeViewEmptyCode}>
      Example of an <code className="nx-code">NxTreeView</code> that cannot be opened because it has no children.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Disabled Example"
                        id="nx-tree-view-disabled-example"
                        liveExample={NxTreeViewDisabled}
                        codeExamples={nxTreeViewDisabledCode}>
      Example of a disabled <code className="nx-code">NxTreeView</code>.
    </GalleryExampleTile>
  </>;

export default NxTreeViewPage;
