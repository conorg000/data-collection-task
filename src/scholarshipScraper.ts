import { title } from "process";
import { cleanHtml } from "./cleanHtml";
import { Scholarship, ScholarshipConfig } from "./types";
import { chromium } from 'playwright';


export async function scholarshipScraper(scholarshipConfig: ScholarshipConfig): Promise<Scholarship[]> {

    const scholarships: Scholarship[] = [];

    //////////////////////////////////////////////////////////
    // Here are some examples of how we like to use Playwright
    //////////////////////////////////////////////////////////

    // const browser = await chromium.launch({ headless: false });
    // const page = await browser.newPage();
    // const url = scholarshipConfig.urls[0];
    // await page.goto(url);
    // await page.waitForTimeout(500);

    //////////////////////////////////////////////////////////
    // If the scholarship has its own page, get the title
    //////////////////////////////////////////////////////////

    // const title = await page.evaluate(() => {
    //     const title = document.querySelector('title');
    //     return title ? title.textContent : '';
    // });


    //////////////////////////////////////////////////////////
    // When saving HTML content, please use cleanHtml() to remove unwanted elements (unless these elements contain key information on the scholarship)
    //////////////////////////////////////////////////////////

    // const html = await page.content();
    // const $ = cleanHtml(html);
    // const content = $('body').html();

    //////////////////////////////////////////////////////////
    // The output will be an array of Scholarship objects
    //////////////////////////////////////////////////////////
    // const scholarship: Scholarship = {
    //     title,
    //     url,
    //     markdown: content
    // };

    return scholarships;
}
