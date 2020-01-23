import puppeteer from "puppeteer";
import { step } from "mocha-steps";
describe("mocha steps demo", () => {
  let browser;
  let page;
  before(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.setDefaultTimeout(7000);
  });

  after(async () => {
    await browser.close();
  });

  step("Should load google home", async () => {
    await page.goto("https://www.google.com");
  });
  step("step 2", async () => {
    console.log("at step 2");
    await await page.waitForSelector('#aasdasf');
  });
  step("step 3", async () => {
    console.log("at step 3");
  });
  step("step 4", async () => {
    console.log("at step 4");
  });
});
