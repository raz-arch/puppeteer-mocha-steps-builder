import { step } from 'mocha-steps'
import Page from '../builder'
const argv = require('yargs').argv
describe('mocha steps demo', () => {
	console.log('in describe block')
	let page
	let mobile
	before(async () => {
		//page = await Page.build("Desktop")
		mobile = await Page.build('Mobile')
		console.log('in before hook: initializing setup')
	})

	after(async () => {
		//await page.close();
		await mobile.close()
		console.log('in after hook: teardown')
	})

	step('Should load google home', async () => {
		await mobile.goto('https://www.google.com')
	})
	step('step 2', async () => {
		console.log('at step 2')
    const args = process.argv[5]
    console.log(argv.env)
		console.log(args)
		//await page.waitForSelector('#aasdasf');
	})
	step('step 3', async () => {
		console.log('at step 3')
	})
	step('step 4', async () => {
		console.log('at step 4')
	})
})
