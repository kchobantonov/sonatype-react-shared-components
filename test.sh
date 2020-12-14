#
# Copyright (c) 2019-present Sonatype, Inc.
# This program and the accompanying materials are made available under
# the terms of the Eclipse Public License 2.0 which accompanies this
# distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
#

#!/bin/bash
SERVER_URL=$1
API_KEY=$2
DATE_STR=$(date "+%Y%m%d%H%M%S")
DATE_HEADER="Date: $(date "+%a, %d %b %Y %T %Z")"

RESULTS_URL=$(curl "https://$SERVER_URL.applitools.com/api/sessions/renderinfo?apiKey=$API_KEY" | jq -r ".resultsUrl")

PUT_URL=$(echo $RESULTS_URL | sed "s/\_\_random\_\_/$DATE_STR/g")

echo "Testing PUT to:" $PUT_URL

PUT_RESULTS=$(curl -i --verbose --request PUT --url "$PUT_URL" --header "$DATE_HEADER" --header 'x-ms-blob-type: BlockBlob' --header 'x-ms-version: 2015-02-21' --form 'image=""')

echo $PUT_RESULTS
