import { NgrxMeJanPage } from './app.po';

describe('ngrx-me-jan App', function() {
  let page: NgrxMeJanPage;

  beforeEach(() => {
    page = new NgrxMeJanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
