import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Acme Photos');
  });

  it('should display home button', () => {
    page.navigateTo();
    expect(page.getHomeButton()).toEqual('Go Home');
  });

  it('should redirect to all albums page', () => {
    page.navigateTo();
    page.clickOnViewAllAlbums().then(() => {
      expect(page.getPageTitle()).toEqual('All Albums');
    });
  });

  it('should render a lightbox after clicking on a photo', () => {
    page.navigateTo();
    page.clickOnPhoto().then(() => {
      expect(page.getLightboxOverlay).toBeTruthy();
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
