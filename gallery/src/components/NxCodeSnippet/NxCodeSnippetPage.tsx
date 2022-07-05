/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP, NxCode } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxCodeSnippetExample from './NxCodeSnippetExample';
import NxCodeSnippetComplexExample from './NxCodeSnippetComplexExample';
import NxCodeSnippetSizingExample from './NxCodeSnippetSizingExample';

const nxCodeSnippetCode = require('./NxCodeSnippetExample?raw'),
    nxCodeSnippetComplexCode = require('./NxCodeSnippetComplexExample?raw'),
    nxCodeSnippetSizingCode = require('./NxCodeSnippetSizingExample?raw');

export default function NxCodeSnippetPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxCodeSnippet</NxCode> creates a read-only text area containing the specified text
          content, along with a button enabling the user to easily copy that text content to the clipboard.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>label</NxTable.Cell>
              <NxTable.Cell>string | ReactElement</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The label for the text area's form group</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>sublabel</NxTable.Cell>
              <NxTable.Cell>string | ReactElement</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>empty</NxTable.Cell>
              <NxTable.Cell>JSX content to render as the sublabel for the text area's form group</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>content</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The text content to display within the text area and for which to enable copying to the clipboard
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>rows</NxTable.Cell>
              <NxTable.Cell>number</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The number of rows of the text area to dictate its height
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCopyUsingBtn</NxTable.Cell>
              <NxTable.Cell>Function () =&gt; void</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                A callback which fires after the copy initiated by the Copy to Clipboard button completes.
                Note that copies initiated in other ways (e.g. Ctrl-C) do not trigger this callback.
                See also the{' '}
                <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event">
                  native copy event
                </NxTextLink>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>inputProps</NxTable.Cell>
              <NxTable.Cell>
                Props for <NxCode>NxTextInput</NxCode> except
                for <NxCode>type</NxCode>,{' '}
                <NxCode>value</NxCode>,{' '}
                <NxCode>isPristine</NxCode>,
                and <NxCode>readOnly</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Props to apply to the textarea within the <NxCode>NxCodeSnippet</NxCode>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  HTML div Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>N/A</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxCodeSnippet</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;div&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple Example"
                          id="nx-code-snippet-simple-example"
                          liveExample={NxCodeSnippetExample}
                          codeExamples={nxCodeSnippetCode}>
        Two <NxCode>NxCodeSnippet</NxCode>s with minimal props: just some content which can be
        copied to the clipboard.
      </GalleryExampleTile>

      <GalleryExampleTile title="Single-Line Example"
                          id="nx-code-snippet-custom-sizing-example"
                          liveExample={NxCodeSnippetSizingExample}
                          codeExamples={nxCodeSnippetSizingCode}>
        An <NxCode>NxCodeSnippet</NxCode> demonstrating a single-line textarea with the optional
        {' '}<NxCode>rows</NxCode> prop.
      </GalleryExampleTile>

      <GalleryExampleTile title="More Complex Example"
                          id="nx-code-snippet-complex-example"
                          liveExample={NxCodeSnippetComplexExample}
                          codeExamples={nxCodeSnippetComplexCode}>
        An <NxCode>NxCodeSnippet</NxCode> demonstrating optional
        props: <NxCode>sublabel</NxCode>, <NxCode>onCopyUsingBtn</NxCode>,
        and <NxCode>rows</NxCode>.
      </GalleryExampleTile>
    </>
  );
}
