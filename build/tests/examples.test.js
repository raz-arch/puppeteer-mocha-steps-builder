"use strict";

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _chai = require("chai");

var _LoginPage = require("../pages/LoginPage");

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = require("yargs").argv;

describe("mocha steps demo", function () {
  console.log("in describe block");
  var page = void 0;
  var mobile = void 0;
  var loginpage = void 0;
  before(async function () {
    console.log("in before hook: initializing setup");
    page = await _builder2.default.build("Desktop");
    //mobile = await Page.build('Mobile')
    loginpage = await new _LoginPage2.default(page);
  });

  after(async function () {
    await page.close();
    //await mobile.close()
    console.log("in after hook: teardown");
  });

  (0, _mochaSteps.step)("Should load homepage", async function () {
    await page.goto("http://zero.webappsecurity.com/index.html");
    var signInButtonVisibility = await page.isElementVisible("#signin_button");
    (0, _chai.expect)(signInButtonVisibility).to.be.true;
  });
  (0, _mochaSteps.step)("should navigate to login page", async function () {
    await page.waitAndClick("#signin_button");
    var loginForm = await page.isElementVisible("#login_form");
    (0, _chai.expect)(loginForm).to.be.true;
    var signInButtonVisibility = await page.isElementVisible("#signin_button");
    (0, _chai.expect)(signInButtonVisibility).to.be.false;
    console.log("at step 2");
    var args = process.argv[6];
    console.log(argv.env);
    console.log(args);
  });
  (0, _mochaSteps.step)("should login to application", async function () {
    await loginpage.login('username', 'password');
    var navtabs = await page.isElementVisible(".nav-tabs");
    (0, _chai.expect)(navtabs).to.be.true;
  });
  (0, _mochaSteps.step)('check navbar count as 6', async function () {
    var navtabCount = await page.getCount('.nav-tabs li');
    (0, _chai.expect)(navtabCount).to.equal(6);
  });
});