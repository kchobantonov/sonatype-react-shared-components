/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
@Library(['private-pipeline-library', 'jenkins-shared']) _

dockerizedRunPipeline(
  run: {
    withCredentials([string(credentialsId: 'REACT_SHARED_COMPONENTS_APPLITOOLS_KEY', variable: 'APPLITOOLS_API_KEY')]) {
      sh './test.sh eyesapi $APPLITOOLS_API_KEY'
    }
  },
)
