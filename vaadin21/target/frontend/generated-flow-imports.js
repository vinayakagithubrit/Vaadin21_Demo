export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};

// Handled in the application theme
// addCssBlock('<custom-style><style include="lumo-color lumo-typography"></style></custom-style>', true);
document.documentElement.setAttribute('theme', 'light');

import $css_0 from 'Frontend/styles/point-theme.css';
addCssBlock(`<dom-module id="flow_css_mod_0" theme-for="vaadin-body-wrapper"><template><style>${$css_0}</style></template></dom-module>`);
import $css_1 from 'Frontend/styles/point-theme.css';
addCssBlock(`<dom-module id="flow_css_mod_1" theme-for="vaadin-tabs"><template><style>${$css_1}</style></template></dom-module>`);
import $css_2 from 'Frontend/styles/point-theme.css';
addCssBlock(`<dom-module id="flow_css_mod_2" theme-for="vaadin-tab"><template><style>${$css_2}</style></template></dom-module>`);

import '@vaadin/flow-frontend/ConnectionIndicator.js';
import '@vaadin/flow-frontend/field-highlighter/theme/lumo/vaadin-field-highlighter.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tab.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs.js';
let thisScript;
const elements = document.getElementsByTagName('script');
for (let i = 0; i < elements.length; i++) {
 const script = elements[i];
 if (script.getAttribute('type')=='module' && script.getAttribute('data-app-id') && !script['vaadin-bundle']) {
  thisScript = script;
  break;
 }
}
if (!thisScript) {
 throw new Error('Could not find the bundle script to identify the application id');
}
thisScript['vaadin-bundle'] = true;
if (!window.Vaadin.Flow.fallbacks) { window.Vaadin.Flow.fallbacks={}; }
const fallbacks = window.Vaadin.Flow.fallbacks;
fallbacks[thisScript.getAttribute('data-app-id')] = {}
fallbacks[thisScript.getAttribute('data-app-id')].loadFallback = function loadFallback() {
 return import('./generated-flow-imports-fallback.js');
}