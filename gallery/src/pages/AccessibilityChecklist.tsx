/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';
import {
  NxP,
  NxH3,
  NxH4,
  NxList,
  NxTextLink,
  NxCheckbox,
  NxFieldset,
  useToggle
} from '@sonatype/react-shared-components';

function Accessibility() {

  const [isA, toggleA] = useToggle(false),
      [isAA, toggleAA] = useToggle(false),
      [isAAA, toggleAAA] = useToggle(false),
      [isReco, toggleReco] = useToggle(false);

  return (
    <GalleryTile title="WCAG Accessibility UX Checklist" className="nx-tile--accessibility-list">
      <NxP>
        Accessibility UX checklist to serve as a method for designers and developers to assess the WCAG compliance of
        their work.
      </NxP>
      <NxP>
        WCAG 2.1 Verification - 116 Questions | Cumulative list
      </NxP>
      <NxFieldset label="Filter by level" isRequired className="gallery-accessibility-filter">
        <NxCheckbox onChange={toggleA} isChecked={!isA}>Level A</NxCheckbox>
        <NxCheckbox onChange={toggleAA} isChecked={!isAA}>Level AA</NxCheckbox>
        <NxCheckbox onChange={toggleAAA} isChecked={!isAAA}>Level AAA</NxCheckbox>
        <NxCheckbox onChange={toggleReco} isChecked={!isReco}>Recommendations</NxCheckbox>
      </NxFieldset>
      <NxH3>
        1. Perceivable
      </NxH3>
      <NxP>
        <em>
          Information and user interface components must be presentable to users in ways they can perceive.
        </em>
      </NxP>
      <NxH4>
        1.1 Text alternatives- Provide text alternatives for any non-text content so that it can be changed into other
        forms people need, such as large print, braille, speech, symbols or simpler language.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided “alt text” alternatives for all images and data visualizations to a degree that information
            is not lost?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111#non-text-content">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided “alt text” alternatives for all graphics like icons?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111#non-text-content">
            Level A
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        1.2 Time-based Media- Provide alternatives for time-based media [such as video, sound, slideshows, etc.]
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided a transcript of prerecorded audio and video recordings?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided captions and descriptions for prerecorded audio and videos?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are live captions available for live audio and video recordings?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#captions-live">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided audio description which describes in real-time the contents of all video recordings?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we have a video recording of an ASL interpreter translating our pre recorded media?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#sign-language-prerecorded">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided an audio description of the prerecorded media that also includes implicit context that may
            not be understood through a language translation alone?
          </NxCheckbox>
          <NxTextLink external href="">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided a transcript or equivalent version of live video content?
          </NxCheckbox>
          <NxTextLink external href="">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        1.3 Adaptable- Create content that can be presented in different ways without losing the integrity andcontext of
        the content.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can we provide a simpler layout without losing information or structure?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111%2C128%2C133#adaptable">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we included a text description of our content that conveys implicit tone and meaning, even if it is not
            explicitly stated within that content?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we made the correct order of consuming our content obvious if the order of content is essential to
            understanding it?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Does the sequence of information as we reveal it make sense if we went through it in order?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we made sure to not use physical characteristics like color or location to explain how to accomplish a
            task?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we allow users to view our content in both landscape and portrait mode without distortion (unless one way
            or the other is essential)?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#orientation">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we appropriately labeled our UI components so autofill can be used correctly?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we labeled input fields to communicate what information users can enter and why?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Does our markup match what the UI element is so that support devices can apply the user's customized
            preferences?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        1.4 Distinguishable- Make it easier for users to see and hear content including separating
        foreground from background.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can users tell the difference between the foreground and background of content?
          </NxCheckbox>
          <NxTextLink external
                      href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111%2C128%2C133#distinguishable">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we made sure that color is not the only way that we convey information in our content?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#use-of-color">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can all normal text colors be differentiated from their background color at a
            <strong>4.5:1</strong> ratio ?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#audio-control">Level A</NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can all large text colors be differentiated from their background color at a
            <strong>3:1</strong>ratio?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can all UI/graphic colors be differentiated from their background color at a
            <strong>3:1</strong>ratio (unless they are disabled or logos)?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">Level AA</NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do all page elements render legibly when zoomed in at <strong>200%</strong>?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">Level AA</NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we made sure not to rely on images alone to share information (unless it is essential)?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#images-of-text">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can all normal text colors be differentiated from their background color at a
            <strong>7:1</strong> ratio?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can all large text colors be differentiated from their background color at a
            <strong>4.5:1</strong> ratio?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can all UI/graphic colors be differentiated from their background color at a
            <strong>3:1</strong> ratio (unless they are disabled or logos)?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast">
              Level AA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can voices in audio be heard clearly and easily distinguished from background noise?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#low-or-no-background-audio">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            If we have included a block of text, have we given the user the ability to customize how they view it
            (color, alignment, line spacing, etc)?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation">
              Level AAA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we only used images of text (without alt text) for decoration, not sharing content?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#images-of-text-no-exception">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we made sure that a vertical scroll bar is not needed until we exceed
            <strong>320px</strong> and a horizontal scroll bar is not needed until we exceed
            <strong>256px</strong>?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#reflow">
              Level AA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can our content be viewed and understood without issues if the line height is
            <strong>
              1.5
            </strong>
            bigger than the font size?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">
              Level AA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can our content be viewed and understood without issues if the space between each line of text is at least
            double the font size?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">
              Level AA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can our content be viewed and understood without issues if the space between paragraphs is at least double
            the font size?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">
              Level AA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can our content be viewed and understood without issues if the space between letters is at least
            <strong>0.12 </strong> times bigger than the font size?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">
              Level AA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can our content be viewed and understood without issues if the space between words is at least
            <strong>0.16</strong> times bigger than the font size?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">
              Level AA
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-reco ${isReco && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are our UI components named as follows and are these states obvious to assistive devices?
          </NxCheckbox>
          <NxList bulleted>
            <NxList.Item>
              <NxCheckbox isChecked={false}>
                <strong>
                  Default
                </strong>
              </NxCheckbox>
            </NxList.Item>
            <NxList.Item>
              <NxCheckbox isChecked={false}>
                <strong>
                  Inactive
                </strong>
              </NxCheckbox>
            </NxList.Item>
            <NxList.Item>
              <NxCheckbox isChecked={false}>
                <strong>
                  Focus
                </strong>
              </NxCheckbox>
            </NxList.Item>
            <NxList.Item>
              <NxCheckbox isChecked={false}>
                <strong>
                  Disabled
                </strong>
              </NxCheckbox>
            </NxList.Item>
            <NxList.Item>
              <NxCheckbox isChecked={false}>
                <strong>
                  Loading
                </strong>
              </NxCheckbox>
            </NxList.Item>
            <NxList.Item>
              <NxCheckbox isChecked={false}>
                <strong>
                  Error
                </strong>
              </NxCheckbox>
            </NxList.Item>
          </NxList>
        </NxList.Item>
      </NxList>

      <NxH3>
        2. Operable
      </NxH3>
      <NxP>
        <em>
          User interface components and navigation must be operable.
        </em>
      </NxP>
      <NxH4>
        2.1 Keyboard Only- Make all functionality available from a keyboard.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can users use a keyboard to access all content (as long as the path to get there is not important)?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can users navigate away from focused content using only a keyboard without getting stuck?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can users use a keyboard to access all content no matter what?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard-no-exception">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give the user the ability to turn hotkey shortcuts on and off?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do keyboard hotkeys and standard shortcuts work properly within the interface?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts">
            Level A
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        2.2 Enough Time- Provide users enough time to read and use content.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can users adjust timing (re: slideshows, automated-scrolling, etc) if needed?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are we giving users the ability to pause and restart automated content?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give the user the ability to turn off motion animations if they start automatically?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give users the ability to turn off motion animations if they last for more than
            <strong>
              5
            </strong>
            seconds?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give users the ability to stop or pause updates that begin automatically?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give users the ability to signal that they need more time before a timeout?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we allow users to turn off timeouts unless they are necessary to security?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Is timing completely irrelevant for the user to fully engage with our content?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#no-timing">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we only interrupt users from what they were doing in an emergency?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#interruptions">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give the user the ability to start where they left off after reauthenticating?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#re-authenticating">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we preserve data as it was when the user is automatically logged out?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#re-authenticating">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        2.3 Seizures and Physical Reactions- Do not design content in a way that is known to cause seizures or physical
        reactions.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we made sure none of our content blinks or flashes more than
            <strong>
              3
            </strong>
            times per second?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold">
            Level A
          </NxTextLink>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#three-flashes">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we given users the ability to turn off any animations that start as soon as they interact with them?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        2.4 Navigable- Provide ways to help users navigate, find content, and determine where they are.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can we give redundancy cues and/or structural markup that alerts users of duplicated content?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do all pages have descriptive titles that differentiate them from others within navigation?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#page-titled">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do all headings describe the purpose of the page?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#page-titled">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Does the order of tabs and information presented to those using a keyboard make sense?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do all links read as clear descriptions of where they will navigate the user?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are there multiple ways to navigate to a page within the system?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do all labels clearly describe the topic or purpose of the content they are labeling?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do our labels use the exact same words as the content they are describing?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Is the focus indicator always available to those using a keyboard?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can the user verify their location within the interface (re: “sitemap” navigation)?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#location">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do all links reveal their purpose to the user? ( Level AAA ) //
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do all links give additional descriptions about what the link's content entails?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we consistently used the correct order of header hierarchy throughout the interface?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#section-headings">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        2.5 Input Modalities- Make it easier for users to operate functionality through various inputs beyond a
        keyboard.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we allowed the user to move their mouse in whatever pattern allows them to accomplish a task?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided an alternative to swiping and other pointer based gestures?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we prioritized the “release” click of the mouse for the user to take action?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are all buttons and graphic labels named as what they are?(re: “checkbox”, “notification,” etc)
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we given users the ability to adjust/turn off motion input sensing?(re: shake to erase)
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#motion-actuation">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are our click targets at least
            <strong>
              44px x 44px
            </strong>
            in size?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#target-size">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we enabled non-touch inputs even on devices where touch inputs are present?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#concurrent-input-mechanisms">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>

      <NxH3>
        Understandable
      </NxH3>
      <NxP>
        <em>
          Information and the operation of the user interface must be understandable.
        </em>
      </NxP>
      <NxH4>
        3.1 Readable- Make text content readable and understandable.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Has a default human language been programmed into markup?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#language-of-page">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we labeled what language is being used and when it changes to adjust vernacular?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we labeled jargon and idioms within our content?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#unusual-words">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we offer a source that explains our abbreviations that's hosted internally or externally?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#abbreviations">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we presented content at a middle school reading level?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#reading-level">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            If our content is very complex, have we provided additional supporting materials to help users understand it
            at a middle school reading level?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#reading-level">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided a mechanism to support correct pronunciation of terms not widely known?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#pronunciation">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        3.2 Predictable- Make pages appear and operate in predictable ways.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Does content in a focus state remain exactly the same as when it's in the default state?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#on-focus">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Has the user been made aware that the interface will change when they input information prior to them doing
            so?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#on-input">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are UI page elements in a standard, consistent place within the page's layout?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Is the sequence of those UI elements repeated consistently throughout the interface?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Is the page and site navigation always in the same location on each page?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are our icons used consistently in the same context across the interface?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are the UI elements consistent with the behavior of standard UI elements?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are we allowing the user to decide when to take action instead of automatically doing it for them?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#change-on-request">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give the user the ability to turn off all notifications until the end of the session?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#change-on-request">
            Level AAA
          </NxTextLink>
        </NxList.Item>
      </NxList>
      <NxH4>
        3.3 Input Assistance- Help users avoid and correct mistakes.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we alert users immediately with an error message as soon as an error is detected?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111#non-text-content">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we provided more than one cue that an error has occurred?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#error-identification">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are all required form fields clearly indicated to the user?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#error-identification">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are input fields always paired with directions that help the user decide what to enter?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do our alerts always include text, even if colors and/or graphics are also used in the notification?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">
            Level A
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Are our error messages as short and specific as possible?
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            If an error is detected, have we offered a concise solution to fix the error?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we allowed users to review and correct their submissions before submitting them?(Especially with legal
            commitments and financial transactions)
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-legal-financial-data">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we give the user the ability to immediately undo a mistake in any situation?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-legal-financial-data">
            Level AA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-aaa ${isAAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we have a readily available system in place whenever a user needs help?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#help">
            Level AAA
          </NxTextLink>
        </NxList.Item>
        <NxList.Item className={`level-reco ${isReco && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Have we created specific help text and options that allow the user to complete a task without losing track
            of where they are?
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-reco ${isReco && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Do we allow users to change between devices when interacting with content on multiple devices during the
            same session?
          </NxCheckbox>
        </NxList.Item>
      </NxList>
      <NxH3>
        Robust
      </NxH3>
      <NxP>
        <em>
          Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive
          technologies.
        </em>
      </NxP>
      <NxH4>
        4.1 Compatible- Maximize compatibility with current and future user agents, including assistive technologies.
      </NxH4>
      <NxList bulleted className="nx-list--no-bullets">
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Does all content that uses a markup language have complete start and end tags?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#parsing">
              Level A
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Does all of our markup include only one attribution (no duplicates)?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#parsing">
              Level A
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item>
          <NxCheckbox isChecked={false}>
            Are all HTML elements correctly nested according to standard use?
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-a ${isA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can the name and role of all UI elements be easily detected by supportive technology?
            <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">
              Level A
            </NxTextLink>
          </NxCheckbox>
        </NxList.Item>
        <NxList.Item className={`level-aa ${isAA && 'hidden'}`}>
          <NxCheckbox isChecked={false}>
            Can all of our status messages be automatically received and interpreted by supportive technology (even if
            they are not the user's current focus)?
          </NxCheckbox>
          <NxTextLink external href="https://www.w3.org/WAI/WCAG21/quickref/#status-messages">
            Level AA
          </NxTextLink>
        </NxList.Item>
      </NxList>
    </GalleryTile>
  );
}

export default Accessibility;
