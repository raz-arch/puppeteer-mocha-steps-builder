"use strict";

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _mochaSteps = require("mocha-steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("mocha steps demo", function () {
  var browser = void 0;
  var page = void 0;
  before(async function () {
    browser = await _puppeteer2.default.launch({ headless: true });
    page = await browser.newPage();
    await page.setDefaultTimeout(7000);
  });

  after(async function () {
    await browser.close();
  });

  (0, _mochaSteps.step)("Should load google home", async function () {
    await page.goto("https://www.google.com");
  });
  (0, _mochaSteps.step)("step 2", async function () {
    console.log("at step 2");
    await await page.waitForSelector('#aasdasf');
  });
  (0, _mochaSteps.step)("step 3", async function () {
    console.log("at step 3");
  });
  (0, _mochaSteps.step)("step 4", async function () {
    console.log("at step 4");
  });
});