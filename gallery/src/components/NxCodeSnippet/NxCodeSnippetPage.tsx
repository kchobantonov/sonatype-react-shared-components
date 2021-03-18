/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxCodeSnippetExample from './NxCodeSnippetExample';
import NxCodeSnippetComplexExample from './NxCodeSnippetComplexExample';

import { NxTable, NxTableHead, NxTableCell, NxTableRow, NxTableBody } from '@sonatype/react-shared-components';

const nxCodeSnippetCode = require('./NxCodeSnippetExample?raw'),
    nxCodeSnippetComplexCode = require('./NxCodeSnippetComplexExample?raw');

export default function NxCodeSnippetPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <NxCode>NxCodeSnippet</NxCode> creates a read-only text area containing the specified text
          content, along with a button enabling the user to easily copy that text content to the clipboard.
        </p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Default</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>label</NxTableCell>
              <NxTableCell>string | ReactElement</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>The label for the text area's form group</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>sublabel</NxTableCell>
              <NxTableCell>string | ReactElement</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>empty</NxTableCell>
              <NxTableCell>JSX content to render as the sublabel for the text area's form group</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>content</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                The text content to display within the text area and for which to enable copying to the clipboard
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onCopyUsingBtn</NxTableCell>
              <NxTableCell>Function () =&gt; void</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                A callback which fires after the copy initiated by the Copy to Clipboard button completes.
                Note that copies initiated in other ways (e.g. Ctrl-C) do not trigger this callback.
                See also the{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event"
                   target="_blank"
                   rel="noopener">
                  native copy event
                </a>
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>inputProps</NxTableCell>
              <NxTableCell>
                Props for <NxCode>NxTextInput</NxCode> except
                for <NxCode>type</NxCode>,{' '}
                <NxCode>value</NxCode>,{' '}
                <NxCode>isPristine</NxCode>,
                and <NxCode>readOnly</NxCode>
              </NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                Props to apply to the textarea within the <NxCode>NxCodeSnippet</NxCode>
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTableCell>
              <NxTableCell>
                <a className="nx-text-link"
                   target="_blank"
                   rel="noopener"
                   href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  HTML div Attributes
                </a>
              </NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>N/A</NxTableCell>
              <NxTableCell>
                <NxCode>NxCodeSnippet</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;div&gt;</NxCode>.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple Example"
                          id="nx-code-snippet-simple-example"
                          liveExample={NxCodeSnippetExample}
                          codeExamples={nxCodeSnippetCode}>
        Two <NxCode>NxCodeSnippet</NxCode>s with minimal props: just some content which can be
        copied to the clipboard.
      </GalleryExampleTile>

      <GalleryExampleTile title="More Complex Example"
                          id="nx-code-snippet-complex-example"
                          liveExample={NxCodeSnippetComplexExample}
                          codeExamples={nxCodeSnippetComplexCode}>
        An <NxCode>NxCodeSnippet</NxCode> demonstrating optional
        props: <NxCode>sublabel</NxCode>, <NxCode>onCopyUsingBtn</NxCode>,
        and <NxCode>inputProps</NxCode>
      </GalleryExampleTile>
    </>
  );
}
