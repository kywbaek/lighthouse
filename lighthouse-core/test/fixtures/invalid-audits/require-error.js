/**
 *
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// NOTE: this require path does not resolve correctly.
const LighthouseAudit = require('../terrible/path/come/on/audit');

class RequireErrorAudit extends LighthouseAudit {
  static get meta() {
    return {
      name: 'require-error',
      category: 'Custom',
      description: 'Require Error',
      helpText: 'This one has a bad require()',
      requiredArtifacts: ['HTML']
    };
  }

  static audit() {}
}

module.exports = RequireErrorAudit;
