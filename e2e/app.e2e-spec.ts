import { TestkendoPage } from './app.po';

describe('testkendo App', () => {
  let page: TestkendoPage;

  beforeEach(() => {
    page = new TestkendoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
