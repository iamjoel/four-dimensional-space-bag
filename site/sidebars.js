/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const baseConfig = require('./sidebar-config/base')
const combineConfig = require('./sidebar-config/combine')
const pageConfig = require('./sidebar-config/page')


// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  base: baseConfig,
  combine: combineConfig,
  page: pageConfig,
};

module.exports = sidebars;
