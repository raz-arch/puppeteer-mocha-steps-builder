'use strict';

var _mochaSteps = require('mocha-steps');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = require('yargs').argv;
describe('mocha steps demo', function () {
	console.log('in describe block');
	var page = void 0;
	var mobile = void 0;
	before(async function () {
		//page = await Page.build("Desktop")
		mobile = await _builder2.default.build('Mobile');
		console.log('in before hook: initializing setup');
	});

	after(async function () {
		//await page.close();
		await mobile.close();
		console.log('in after hook: teardown');
	});

	(0, _mochaSteps.step)('Should load google home', async function () {
		await mobile.goto('https://www.google.com');
	});
	(0, _mochaSteps.step)('step 2', async function () {
		console.log('at step 2');
		var args = process.argv[5];
		console.log(argv.env);
		console.log(args);
		//await page.waitForSelector('#aasdasf');
	});
	(0, _mochaSteps.step)('step 3', async function () {
		console.log('at step 3');
	});
	(0, _mochaSteps.step)('step 4', async function () {
		console.log('at step 4');
	});
});