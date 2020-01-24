import puppeteer from 'puppeteer'
console.log("in Builder")
export default class Builder {
    
	static async build(viewport) {
		const launchOptions = {
			headless: false,
			slowMo: 0,
			args: [
				'--no-sandbox',
				'--disable-setui-sandbox',
                '--disable-web-security',
                '--start-maximized',
			],
		}
		const browser = await puppeteer.launch(launchOptions)
		const page = await browser.newPage()
		const extendedPage = new Builder(page)
		page.setDefaultTimeout(20000)
		switch (viewport) {
			case 'Mobile':
				const mobileViewport = puppeteer.devices['iPhone X']
				await page.emulate(mobileViewport)
				break
			case 'Tablet':
				const tabletViewport = puppeteer.devices['iPad landscape']
				await page.emulate(tabletViewport)
				break
			case 'Desktop':
            await page.setViewport({
                width: 1366,
                height:768
            })   
            break
			default:
				throw new Error("only support Mobile/Tablet/Desktop")
        }
        return new Proxy(extendedPage,{
            get: function (_target,property) {
                return extendedPage[property] || browser[property] || page[property]
            }
        })
    }
    constructor(page){
        this.page = page;
    }
    
}
