import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getPageTitle() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  getTitleText() {
    return element(by.css('app-root nav .left p')).getText() as Promise<string>;
  }

  getHomeButton() {
    return element(by.css('app-root nav .right a')).getText() as Promise<string>;
  }

  clickOnViewAllAlbums() {
    return element(by.className('view-all-button')).click();
  }

  clickOnPhoto() {
    return element(by.className('single-photo')).click();
  }

  getLightboxOverlay() {
    return element(by.className('lightbox-overlay'));
  }
}
