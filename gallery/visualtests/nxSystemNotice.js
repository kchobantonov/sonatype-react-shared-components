/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSystemNotice', function() {
  describe('with global sidebar and multiple notices', function() {
    const { checkFullPageScreenshot, getPage } = setupBrowser('#/NxSystemNoticeMultipleExample');

    beforeEach(async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
    });

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('with traditional page layout', function() {
    const { checkFullPageScreenshot, getPage } = setupBrowser('#/NxSystemNoticeTraditionalPageExample');

    beforeEach(async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
    });

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });
});
