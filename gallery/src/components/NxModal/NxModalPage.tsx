/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxCode, NxP, NxTextLink, NxWarningAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxModalSimpleExample from './NxModalSimpleExample';
import NxModalAlertExample from './NxModalAlertExample';
import NxModalFormExample from './NxModalFormExample';
import NxModalStackedExample from './NxModalStackedExample';
import NxModalFormErrorExample from './NxModalFormErrorExample';
import NxModalExtraWideExample from './NxModalExtraWideExample';
import NxModalNarrowExample from './NxModalNarrowExample';
import NxModalEscExample from './NxModalEscExample';

const NxModalSimpleSourceCode = require('./NxModalSimpleExample?raw');
const NxModalAlertSourceCode = require('./NxModalAlertExample?raw');
const NxModalFormSourceCode = require('./NxModalFormExample?raw');
const NxModalStackedSourceCode = require('./NxModalStackedExample?raw');
const NxModalFormErrorSourceCode = require('./NxModalFormErrorExample?raw');
const NxModalExtraWideSourceCode = require('./NxModalExtraWideExample?raw');
const NxModalNarrowSourceCode = require('./NxModalNarrowExample?raw');
const NxModalEscSourceCode = require('./NxModalEscExample?raw');

export default function NxModalPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <code className="nx-code">NxModal</code> is the preferred way to handle modals. It creates a foreground modal
          window along with a backdrop mask over the rest of the page.
        </NxP>
        <h3>Props</h3>
        <table className="nx-table">
          <thead>
            <tr className="nx-table-row">
              <th className="nx-cell nx-cell--header">Prop</th>
              <th className="nx-cell nx-cell--header">Type</th>
              <th className="nx-cell nx-cell--header">Required</th>
              <th className="nx-cell nx-cell--header">Default</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell">className</td>
              <td className="nx-cell">string</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell"></td>
              <td className="nx-cell">
                Any <code className="nx-code">className</code> attributes passed in on
                the <code className="nx-code">NxModal</code> element will be added to
                the <code className="nx-code">nx-modal</code> class on the modal div.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onCancel</td>
              <td className="nx-cell">Function ((Event) =&gt; void)</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell"></td>
              <td className="nx-cell">
                <NxP>
                  A callback to be called when the browser's native <NxCode>cancel</NxCode> event for the
                  modal's <NxCode>HTMLDialogElement</NxCode> is fired. The circumstances which will fire this event
                  depend on the user agent, but typically include when the user presses ESC within the modal.
                </NxP>
                <NxP>
                  It is expected that the handler passed for this prop will typically remove the NxModal from the
                  JSX rendered to the page. If for whatever reason the handler wants to keep the modal open,
                  it <strong>must</strong> call <NxCode>preventDefault</NxCode> on the event argument. This prevents
                  the browser's native dialog closing logic, such as the removal of the <NxCode>open</NxCode> attribute
                  from the dialog element.
                </NxP>
                <NxP>
                  Note that at the time of writing, proper support for <NxCode>HTMLDialogElement</NxCode>, including
                  its <NxCode>cancel</NxCode> event, is limited to Chromium-based browsers. In other
                  browsers, <NxCode>NxModal</NxCode> itself listens for the ESC keypress and synthesizes the event
                  passed to this callback.
                </NxP>
                <NxP>
                  Also note that any components within the modal that have their own ESC handling should
                  call <NxCode>preventDefault</NxCode> on any ESC keydowns that they handle in order to prevent the
                  modal from also handling them. <NxCode>NxDropdown</NxCode> does this automatically.
                </NxP>
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onClose</td>
              <td className="nx-cell">Function (() =&gt; void)</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell"></td>
              <td className="nx-cell">
                <NxWarningAlert>
                  Deprecated. Old alias for <NxCode>onCancel</NxCode>. Using both at the same time is not supported.
                </NxWarningAlert>
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">variant</td>
              <td className="nx-cell">"wide" | "narrow" | "normal"</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">"normal"</td>
              <td className="nx-cell">
                This prop specifies a style variant for the modal. Currently, variants only differ in width.
                "wide" modals are 1000px wide, "normal" modals are 800px wide, and "narrow" modals are 600px wide.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">HTML <code className="nx-code">&lt;div&gt;</code> Attributes</td>
              <td className="nx-cell">
                <NxTextLink external href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                  HTML Attributes
                </NxTextLink>
              </td>
              <td className="nx-cell">No</td>
              <td className="nx-cell"></td>
              <td className="nx-cell">
                NxModal supports any html attribute that's normally supported by
                {' '}<code className="nx-code">&lt;div&gt;</code> elements.
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Modal Style Classes</h3>
        <table className="nx-table nx-table--gallery-props">
          <thead>
            <tr className="nx-table-row nx-table-row--header">
              <th className="nx-cell nx-cell--header">Class</th>
              <th className="nx-cell nx-cell--header">Location</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-modal-header</code></td>
              <td className="nx-cell">HTML <code className="nx-code">header</code> element</td>
              <td className="nx-cell">
                The <code className="nx-code">NxModal</code> component supports any component that adheres to the
                RSC guidelines for margin and padding. Most commonly, components will be included in
                an <code className="nx-code">H2</code> title tag (with
                the <code className="nx-code">.nx-h2</code> style associated with it)
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-modal-content</code></td>
              <td className="nx-cell">Wrapping the modal content</td>
              <td className="nx-cell">
                All content between the header and footer should be wrapped in a div with
                the <code className="nx-code">.nx-modal-content</code> className. This element (and thus the modal
                overall) will shrink to fit the content, or expand vertically until the modal reaches its maximum height
                (determined as a distance from the viewport edges). If the contents of
                the <code className="nx-code">nx-modal-content</code> continue to grow beyond that height, it
                introduces a scrollbar.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-footer</code></td>
              <td className="nx-cell">HTML <code className="nx-code">footer</code> element</td>
              <td className="nx-cell">
                Each modal should contain a footer containing buttons for various actions. At a minimum, there
                should be a button that enables the user to close the modal. Further, the footer may contain
                an <code className="nx-code">NxAlert</code> as would typically be the case after a form submission
                which resulted in an error.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-modal-content--tabs</code></td>
              <td className="nx-cell">Modifier of <code className="nx-code">.nx-modal-content</code></td>
              <td className="nx-cell">
                A modifier class that must be added to <code className="nx-code">.nx-modal-content</code> when
                you want to use tabs within an <code className="nx-code">NxModal</code> as the sole contents of
                the modal body. The modifier keeps the tabs "sticky" while allowing the tab content to scroll.
              </td>
            </tr>
          </tbody>
        </table>
        <NxInfoAlert>
          Note: Placing content into the modal which exceeds its horizontal bounds is not supported. The resulting
          layout is unspecified.
        </NxInfoAlert>
        <h3>Accessibility</h3>
        <p className="nx-p">
          <code className="nx-code">NxModal</code> uses the <code className="nx-code">dialog</code> role and needs
          to have a label specified by the <code className="nx-code">aria-labelledby</code> or
          {' '}<code className="nx-code">aria-label</code> attribute. Because the value
          of <code className="nx-code">aria-labelledby</code> or <code className="nx-code">aria-label</code> is
          typically the same as the modal header text <code className="nx-code">aria-labelledby</code> is the DRYer
          attribute.
        </p>
        <NxWarningAlert>
          Note: While the use of <code className="nx-code">aria-labelledby</code>
          {' '}(or <code className="nx-code">aria-label</code>) is not required by the component it should be
          considered mandatory in order to comply with accessibility guidelines.
        </NxWarningAlert>
        <table className="nx-table nx-table--gallery-props">
          <thead>
            <tr className="nx-table-row nx-table-row--header">
              <th className="nx-cell nx-cell--header">Attribute</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">aria-labelledby</code></td>
              <td className="nx-cell">
                When the <code className="nx-code">aria-labelledby</code> attribute is used an ID is applied to the
                HTML element that will be providing the label information (typically the modal title H3), the ID is
                referenced by <code className="nx-code">aria-labelledby</code>. See examples below.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">aria-label</code></td>
              <td className="nx-cell">
                When the <code className="nx-code">aria-label</code> attribute is used the text is added directly to the
                attribute. See the NxModal Example with NxAlert example below.
              </td>
            </tr>
          </tbody>
        </table>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxModal Example"
                          id="nx-modal-simple-example"
                          liveExample={NxModalSimpleExample}
                          codeExamples={NxModalSimpleSourceCode}>
        A basic example of an <code className="nx-code">NxModal</code>. Click the button to open the modal. Note that
        this modal has sufficient content to induce scrolling (on most monitors). You will see in other examples that
        when modals have smaller contents, the scrollbar does not appear and the modal content area shrinks to fit.
        This example uses <code className="nx-code">aria-labelledby</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with NxAlert"
                          liveExample={NxModalAlertExample}
                          codeExamples={NxModalAlertSourceCode}>
        An example of an <code className="nx-code">NxModal</code> containing
        an <code className="nx-code">NxAlert</code>. As shown in this example, the most appropriate accessibility role
        in this scenario is <NxCode>alertdialog</NxCode>.  Note that this is actually the only role you'd ever want to
        explicitly add to an <NxCode>NxModal</NxCode>. In non-alert cases, <NxCode>NxModal</NxCode> takes on the
        semantics of the <NxCode>dialog</NxCode> role as one would expect.
        This example uses <code className="nx-code">aria-label</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal with stacked modal example"
                          id="nx-modal-stacked-example"
                          liveExample={NxModalStackedExample}
                          codeExamples={NxModalStackedSourceCode}>
        <code className="nx-code">NxModal</code> also supports stacked or nested modals. A second modal can be
        generated from inside of an <code className="nx-code">NxModal</code>.
        This example uses <code className="nx-code">aria-labelledby</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal example with other ESC-controller elements"
                          id="nx-modal-esc-example"
                          liveExample={NxModalEscExample}
                          codeExamples={NxModalEscSourceCode}>
        <NxCode>NxModal</NxCode> can be used in conjunction with other components that can be closed via the ESC key,
        such as dropdowns. This example demonstrates a convoluted combination of 2 modals, a dropdown, and a custom
        component all working together such that pressing ESC only closes one of them at a time. Note
        that <NxCode>NxDropdown</NxCode> is designed so that pressing ESC when it is open only closes it if it is
        focused.
        This example uses <code className="nx-code">aria-labelledby</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form"
                          id="nx-modal-form-example"
                          liveExample={NxModalFormExample}
                          codeExamples={NxModalFormSourceCode}>
        <code className="nx-code">NxModal</code> also supports inclusion and styling of form elements.
        This example uses <code className="nx-code">aria-labelledby</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form and error styling"
                          id="nx-modal-form-with-alert-example"
                          liveExample={NxModalFormErrorExample}
                          codeExamples={NxModalFormErrorSourceCode}>
        This <code className="nx-code">NxModal</code> also contains a form, but additionally demonstrates the typical
        way that an error upon the submission of said form would be handled: with
        an <code className="nx-code">NxErrorAlert</code> in the footer.
        This example uses <code className="nx-code">aria-labelledby</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Wide NxModal Example"
                          id="nx-modal-wide-example"
                          liveExample={NxModalExtraWideExample}
                          codeExamples={NxModalExtraWideSourceCode}>
        A demonstration of the <code className="nx-code">wide</code> styles
        for <code className="nx-code">NxModal</code>.
        This example uses <code className="nx-code">aria-labelledby</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Narrow NxModal Example"
                          id="nx-modal-narrow-example"
                          liveExample={NxModalNarrowExample}
                          codeExamples={NxModalNarrowSourceCode}>
        A demonstration of the <code className="nx-code">narrow</code> styles
        for <code className="nx-code">NxModal</code>.
        This example uses <code className="nx-code">aria-labelledby</code>.
      </GalleryExampleTile>
    </>
  );
}
