/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';

import { NxCheckbox, NxFormGroup, NxFieldset, useToggle, NxFormSelect, nxFormSelectStateHelpers }
  from '@sonatype/react-shared-components';
import { NxRadio } from '@sonatype/react-shared-components';
import { NxButton } from '@sonatype/react-shared-components';
import { NxStatefulTextInput } from '@sonatype/react-shared-components';
import { NxInfoAlert } from '@sonatype/react-shared-components';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [selectState, setSelectVal] = nxFormSelectStateHelpers.useNxFormSelectState<string>('');

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false);

  const [color, setColor] = useState<string | null>(null);

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    alert('Submitted!');
  }

  return (
    <form className="nx-form" onSubmit={onSubmit} aria-label="Horizontal Layout Example">
      <div className="nx-form-row">
        <NxFormGroup label="Username" isRequired>
          <NxStatefulTextInput aria-required={true} validator={validator}/>
        </NxFormGroup>
        <NxFormGroup label="Hostname">
          <NxStatefulTextInput/>
        </NxFormGroup>
      </div>
      <div className="nx-form-row">
        <NxFormGroup label="Label">
          <NxStatefulTextInput/>
        </NxFormGroup>
        <NxFormGroup label="Label" isRequired>
          <NxFormSelect { ...selectState } onChange={onSelectChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </NxFormSelect>
        </NxFormGroup>
      </div>
      <NxFieldset label="Colors" isRequired>
        <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
      </NxFieldset>
      <NxFieldset label="Primary Color" isRequired>
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
      <footer className="nx-footer">
        <NxInfoAlert>This is a sample alert message</NxInfoAlert>
        <div className="nx-btn-bar">
          <NxButton type="button">Cancel</NxButton>
          <NxButton variant="primary" type="submit">Submit</NxButton>
        </div>
      </footer>
    </form>
  );
}
