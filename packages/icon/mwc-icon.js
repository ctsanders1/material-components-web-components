/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {style} from './mwc-icon-host-css.js';
import './mwc-icon-font.js';

export class Icon extends LitElement {
  renderStyle() {
    return style;
  }
  render() {
    return html`${this.renderStyle()}<slot></slot>`;
  }
}

customElements.define('mwc-icon', Icon);
