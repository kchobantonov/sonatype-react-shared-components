/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxTile, NxH3, NxList } from '@sonatype/react-shared-components';

import {GalleryTile} from '../gallery-components/GalleryTiles';

import CodeExample from '../CodeExample';

const pageConfigExample = `import Foo from './pages/Foo';
import Bar from './pages/Bar';
import Baz from './pages/Baz';
import NxCheckboxPage from './components/NxCheckboxPage';

const pageConfig: PageConfig = {
  'Styles - HTML Elements': {
    'foo component': Foo,
    'bar': Bar,
    'baz': Baz
  },
  'React Components': {
    'NxCheckbox': NxCheckboxPage
  }
};`;

const Contributing = () =>
  <>
    <GalleryTile title="How to add a new component to the Gallery" >
      <NxH3>Create a page describing the component</NxH3>
      <NxList bulleted>
        <NxList.Item>
          For each component or style that you want to add to the Gallery, create a subdirectory
          underneath <NxCode>src/components</NxCode> or <NxCode>src/styles</NxCode>
          with the name of the component or style
        </NxList.Item>
        <NxList.Item>
          Under the subdirectory, create 2 Typescript files to describe the behavior of your component or style. One
          file will be <NxCode>[ComponentName]Example.tsx</NxCode>, which has a working example of the
          component with how different parameters are handled. The second file will
          be <NxCode>[ComponentName]Page.tsx</NxCode>, which should contain 3 things:
          <NxList bulleted>
            <NxList.Item>
              A description of the component and its parameters, as well as an example of how to use the component.
              See also the <NxCode>GalleryDescriptionTile</NxCode> component
            </NxList.Item>
            <NxList.Item>
              Code that demonstrates the component (import the example component and invoke it)
            </NxList.Item>
            <NxList.Item>
              Code snippet of the example component (use the <NxCode>CodeExample</NxCode> component)
            </NxList.Item>
          </NxList>
        </NxList.Item>
        <NxList.Item>
          See also <NxCode>NxCheckboxPage.tsx</NxCode>
          and <NxCode>NxCheckboxExample.tsx</NxCode> as an example of how to create a
          component example.
        </NxList.Item>
      </NxList>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Add the new page to Gallery navigation</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          After you've created the description page, in order to add the component to the Gallery Navigation, you
          will need to add it to the <NxCode>pageConfig</NxCode> object inside of
          the <NxCode>pageConfig.ts</NxCode> file
        </NxP>
        <CodeExample content={pageConfigExample}/>
        <NxList bulleted>
          <NxList.Item>
            Import the description page you created earlier
          </NxList.Item>
          <NxList.Item>
            Place the entry in the proper category (creating a new category if necessary)
          </NxList.Item>
          <NxList.Item>
            It is important to note that the key that you use for your entry will be used by
            <NxCode>react-router</NxCode> to auto-populate the left-hand navigation, page title and URL
          </NxList.Item>
        </NxList>
      </NxTile.Subsection>
    </GalleryTile>
  </>;

export default Contributing;
