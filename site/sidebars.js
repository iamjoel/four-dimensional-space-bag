/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const frontendConfig = require('./docs/frontend/sidebar')
const libsConfig = require('./docs/libs/sidebar')
const backendConfig = require('./docs/backend/sidebar')
const toolsConfig = require('./docs/tools/sidebar')
const aiConfig = require('./docs/ai/sidebar')
const basicConfig = require('./docs/basic/sidebar')

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  frontend: frontendConfig,
  libs: libsConfig,
  backend: backendConfig,
  tools: toolsConfig,
  ai: aiConfig,
  basic: basicConfig,
}

module.exports = sidebars
