import { step } from "mocha-steps";
import Page from "../builder";
import { expect } from "chai";
import LoginPage from "../pages/LoginPage";
const argv = require("yargs").argv;

describe("mocha steps demo", () => {
  console.log("in describe block");
  let page;
  let mobile;
  let loginpage;
  before(async () => {
	console.log("in before hook: initializing setup");
	page = await Page.build("Desktop");
    //mobile = await Page.build('Mobile')
	loginpage = await new LoginPage(page);
  });

  after(async () => {
    await page.close();
    //await mobile.close()
    console.log("in after hook: teardown");
  });

  step("Should load homepage", async () => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    const signInButtonVisibility = await page.isElementVisible(
      "#signin_button"
    );
    expect(signInButtonVisibility).to.be.true;
  });
  step("should navigate to login page", async () => {
    await page.waitAndClick("#signin_button");
    const loginForm = await page.isElementVisible("#login_form");
    expect(loginForm).to.be.true;
    const signInButtonVisibility = await page.isElementVisible(
      "#signin_button"
    );
    expect(signInButtonVisibility).to.be.false;
    const args = process.argv[6];
    console.log(argv.env);
    console.log(args);
  });
  step("should login to application", async () => {
    await loginpage.login('username','password')
    const navtabs = await page.isElementVisible(".nav-tabs");
    expect(navtabs).to.be.true;
  });
  step('check navbar count as 6',async()=>{
	const navtabCount =  await page.getCount('.nav-tabs li')
expect(navtabCount).to.equal(6);
  })
});
