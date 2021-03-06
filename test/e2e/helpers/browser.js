/** Helper functions for using puppeteer for e2e testing */

export const getAllHtmlForSelector = async (page, selector) => {
  const elements = await page.$$(selector);
  return Promise.all(
    elements.map(async el => page.evaluate(e => e.innerHTML, el))
  );
};

export const getHtmlForSelector = async (page, selector) => {
  const element = await page.$(selector);
  return page.evaluate(e => e.innerHTML, element);
};

export const getAllTextForSelector = async (page, selector) => {
  const elements = await page.$$(selector);
  return Promise.all(
    elements.map(async el => page.evaluate(e => e.textContent, el))
  );
};

export const clickAllButtons = async (page, selectors) =>
  Promise.all(selectors.map(async id => page.click(id)));
