'use strict';
/*******************************************************************************
 * Copyright 2012 Pawel Psztyc
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/

/* globals chrome,gwt */
//mock alarms API
if (!chrome.alarms) {
  let functions = 'chrome.alarms.create(name,alarmInfo);chrome.alarms.get(name,callback);chrome.' +
  'alarms.getAll(callback);chrome.alarms.clear(name,callback);chrome.alarms.clearAll(callback)';

  gwt.dev.chrome.registerAPI(functions.split(';'));
}
