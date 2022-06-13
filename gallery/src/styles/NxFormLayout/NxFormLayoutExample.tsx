/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';

import {
  NxCheckbox,
  NxRadio,
  NxStatefulTextInput,
  NxFontAwesomeIcon,
  NxToggle,
  NxFormGroup,
  NxFieldset,
  useToggle,
  NxColorPicker,
  SelectableColor,
  NxInfoAlert,
  NxFormSelect,
  nxFormSelectStateHelpers,
  NxTransferList,
  NxStatefulForm,
  NxReadOnly,
  nxTextInputStateHelpers,
  NxTextInput,
  hasValidationErrors,
  combineValidationErrors
} from '@sonatype/react-shared-components';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { map, range } from 'ramda';

const transferListItems = map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101));

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [textInputState, setTextInputState] = useState(nxTextInputStateHelpers.initialState('', validator)),
      [commentState, setCommentState] = useState(nxTextInputStateHelpers.initialState('', validator));

  function onTextInputChange(val: string) {
    setTextInputState(nxTextInputStateHelpers.userInput(validator, val));
  }

  function onCommentChange(val: string) {
    setCommentState(nxTextInputStateHelpers.userInput(validator, val));
  }

  const [selectState, setSelectVal] = nxFormSelectStateHelpers.useNxFormSelectState<string>(''),
      selectValidationErrors = selectState === null ? 'A selection is required' : null;

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false),
      colorValidationError = !(isRed || isBlue || isGreen) ? 'A color is required' : null;

  const [color, setColor] = useState<string | null>(null);

  const [isWarpOn, toggleWarp] = useToggle(false),
      [isKrakenOut, toggleKraken] = useToggle(false),
      [isShapes, toggleShapes] = useToggle(false);

  const [tagColor, setTagColor] = useState<SelectableColor | null>(null),
      tagColorValidationError = tagColor === null ? 'A tag color is required' : null;

  const [selectedTransferItems, setSelectedTransferItems] = useState<Set<number>>(new Set()),
      [availableTransferItemsFilter, setAvailableTransferItemsFilter] = useState(''),
      [selectedTransferItemsFilter, setSelectedTransferItemsFilter] = useState('');

  const formValidationErrors =
      hasValidationErrors(combineValidationErrors(
          textInputState.validationErrors,
          colorValidationError,
          selectValidationErrors,
          tagColorValidationError
      )) ? 'Required fields are missing' : null;

  function onSubmit() {
    alert('Submitted!');
  }

  function onCancel() {
    alert('Cancelled!');
  }

  const hostnameSublabel = (
    <>
      <NxFontAwesomeIcon icon={faCalendar}/>
      <span id="long-field-sublabel">The field element below is wider than the default.</span>
    </>
  );
  const toggleSublabel = (
    <>
      In a form layout toggles are laid out in a <code className="nx-code">&lt;fieldset&gt;</code> - this text is
      extra long to demonstrate wrapping, how much wood would a woodchuck chuck
    </>
  );

  return (
    <NxStatefulForm onSubmit={onSubmit}
                    onCancel={onCancel}
                    validationErrors={formValidationErrors}
                    aria-label="Default Form Layout Example">
      <NxInfoAlert>This is a sample alert message</NxInfoAlert>
      <NxFormGroup label="A Field to Fill in" isRequired>
        <NxTextInput { ...textInputState } validatable onChange={onTextInputChange}/>
      </NxFormGroup>
      <NxFormGroup label="Username">
        <NxStatefulTextInput />
      </NxFormGroup>
      <NxFormGroup label="Hostname" sublabel={hostnameSublabel}>
        <NxStatefulTextInput className="nx-text-input--long"/>
      </NxFormGroup>
      <NxFieldset label="Colors" isRequired validationErrors={colorValidationError}>
        <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
      </NxFieldset>
      <NxFieldset label="Primary Color" sublabel="Pick a single color">
        <NxRadio name="color"
                 value="red"
                 onChange={setColor}
                 isChecked={color === 'red'}>
          Red
        </NxRadio>
        <NxRadio name="color"
                 value="purple"
                 onChange={setColor}
                 isChecked={color === 'purple'}>
          Purple
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'}>
          Green
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'}>
          Blue
        </NxRadio>
      </NxFieldset>
      <NxFormGroup label="Select" isRequired>
        <NxFormSelect { ...selectState } onChange={onSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </NxFormSelect>
      </NxFormGroup>
      <NxFieldset label="Enable features - this text is extra long to demonstrate wrapping, how much wood would
                         a woodchuck chuck"
                  sublabel={toggleSublabel}>
        <NxToggle inputId="subscribe-check" onChange={toggleWarp} isChecked={isWarpOn}>
          Enable Warp Drive
        </NxToggle>
        <NxToggle inputId="no-label-check" onChange={toggleKraken} isChecked={isKrakenOut}>
          Release the Kraken!
        </NxToggle>
        <NxToggle inputId="children-check" onChange={toggleShapes} isChecked={isShapes}>
          Allow shapes
        </NxToggle>
      </NxFieldset>
      <NxFormGroup label="Comments" isRequired>
        <NxTextInput { ...commentState }
                     validatable
                     type="textarea"
                     placeholder="placeholder"
                     onChange={onCommentChange} />
      </NxFormGroup>
      <NxColorPicker label="Tag Color" isRequired value={tagColor} onChange={setTagColor} />
      <NxFieldset label="Numbered Items">
        <NxTransferList allItems={transferListItems}
                        selectedItems={selectedTransferItems}
                        availableItemsFilter={availableTransferItemsFilter}
                        selectedItemsFilter={selectedTransferItemsFilter}
                        onAvailableItemsFilterChange={setAvailableTransferItemsFilter}
                        onSelectedItemsFilterChange={setSelectedTransferItemsFilter}
                        onChange={setSelectedTransferItems} />
      </NxFieldset>
      <NxReadOnly>
        <NxReadOnly.Label>
          This is a read only label that that describes the data that will appear below
        </NxReadOnly.Label>
        <NxReadOnly.Data>
          Data - found security vulnerability CVE-2020-6230 with severity &lt; 10 (severity = 7.2)
        </NxReadOnly.Data>
        <NxReadOnly.Data>
          Found security vulnerability CVE-2020-6230 with severity &gt;= 7 (severity = 7.2)
        </NxReadOnly.Data>
        <NxReadOnly.Data>
          Found security vulnerability CVE-2020-6230 with status 'Open', not 'Not Applicable'
        </NxReadOnly.Data>
        <NxReadOnly.Data>
          Component does not contain proprietary packages
        </NxReadOnly.Data>
      </NxReadOnly>
    </NxStatefulForm>
  );
}
