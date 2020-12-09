/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTableHead, NxTableRow, NxTableCell, NxTable, NxTableBody } from '@sonatype/react-shared-components';

import NxFormGroupExample from './NxFormGroupExample';
import NxFormGroupRequiredExample from './NxFormGroupRequiredExample';
import NxFormGroupSublabelExample from './NxFormGroupSublabelExample';
import NxFormGroupRichLabelExample from './NxFormGroupRichLabelExample';
import NxFormGroupExistingAriaExample from './NxFormGroupExistingAriaExample';

const nxFormGroupExampleCode = require('!raw-loader!!./NxFormGroupExample').default,
    nxFormGroupSublabelExampleCode = require('!raw-loader!!./NxFormGroupSublabelExample').default,
    nxFormGroupRichLabelExampleCode = require('!raw-loader!!./NxFormGroupRichLabelExample').default,
    nxFormGroupExistingAriaExampleCode = require('!raw-loader!!./NxFormGroupExistingAriaExample').default,
    nxFormGroupRequiredExampleCode = require('!raw-loader!!./NxFormGroupRequiredExample').default;

const NxFormGroupPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        An <code className="nx-code">NxFormGroup</code> is a wrapper around a form field which provides the labels
        and overall spacing. Most commonly, <code className="nx-code">NxFormGroup</code> wraps
        an <code className="nx-code">NxTextInput</code>, but it may wrap other content such as
        a <code className="nx-code">&lt;select&gt;</code> as well. It <em>should not</em> be used to wrap radio
        and checkbox groups, as those are best encapsulated
        in <code className="nx-code">&lt;fieldset&gt;</code> elements.
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
            <NxTableCell>string | ReactNode</NxTableCell>
            <NxTableCell>Yes</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>JSX content to render as the label for the group. Must not be null or undefined.</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>sublabel</NxTableCell>
            <NxTableCell>string | ReactNode</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>empty</NxTableCell>
            <NxTableCell>JSX content to render as the sublabel for the group.</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>isRequired</NxTableCell>
            <NxTableCell>boolean</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>false</NxTableCell>
            <NxTableCell>
              Sets whether the input should display the optional flag – the flag is present by default and
              setting <code className="nx-code">isRequired</code> to true removes the flag.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>children</NxTableCell>
            <NxTableCell>A single ReactElement which can take an id as a prop</NxTableCell>
            <NxTableCell>Yes</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>
              The form element that this group wraps and labels. For accessibility reasons, it
              must be able to receive <code className="nx-code">id</code> and{' '}
              <code className="nx-code">aria-describedby</code> props which must ultimately get rendered onto the
              native input element. If these props are already present, their values
              will be respected. Otherwise, the <code className="nx-code">NxFormGroup</code> will clone and
              augment the child JSX node with autogenerated values for the props.
              If <code className="nx-code">aria-describedby</code> is provided, the autogenerated id of the sublabel
              will be appended to the existing values.
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={NxFormGroupExample}
                        codeExamples={nxFormGroupExampleCode}>
      A basic example of an <code className="nx-code">NxFormGroup</code> wrapping
      an <code className="nx-code">NxTextInput</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Required Example"
                        liveExample={NxFormGroupRequiredExample}
                        codeExamples={nxFormGroupRequiredExampleCode}>
      An example of an <code className="nx-code">NxFormGroup</code> wrapping
      an <code className="nx-code">NxTextInput</code> which uses the isRequired flag to remove the "Optional"
      indicator.
    </GalleryExampleTile>

    <GalleryExampleTile title="Sublabel Example"
                        liveExample={NxFormGroupSublabelExample}
                        codeExamples={nxFormGroupSublabelExampleCode}>
      An example of an <code className="nx-code">NxFormGroup</code> which includes a sublabel. This example also
      shows that <code className="nx-code">NxFormGroup</code> can wrap a
      <code className="nx-code">&lt;select&gt;</code> in addition to
      an <code className="nx-code">NxTextInput</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Rich Label Content Example"
                        liveExample={NxFormGroupRichLabelExample}
                        codeExamples={nxFormGroupRichLabelExampleCode}>
      This example demonstrates that the label and sublabel can be JSX rather than just strings.
    </GalleryExampleTile>

    <GalleryExampleTile title="Existing ID and ARIA Attributes Example"
                        liveExample={NxFormGroupExistingAriaExample}
                        codeExamples={nxFormGroupExistingAriaExampleCode}>
      This example shows how existing values of the id and aria-describedby attribute get respected/augmented.
      Inspect the live example to see the resulting attributes. This example also happens to demonstrate a
      different kind of text input – a large textarea.
    </GalleryExampleTile>
  </>;

export default NxFormGroupPage;
