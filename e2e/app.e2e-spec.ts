import { NgquizPage } from './app.po';

describe('ngquiz App', () => {
  let page: NgquizPage;

  beforeEach(() => {
    page = new NgquizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
