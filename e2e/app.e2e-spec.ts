import { Bin2DecPage } from './app.po';

describe('bin2-dec App', function() {
  let page: Bin2DecPage;

  beforeEach(() => {
    page = new Bin2DecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
