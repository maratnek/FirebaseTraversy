import { FirebaseTraversyPage } from './app.po';

describe('firebase-traversy App', () => {
  let page: FirebaseTraversyPage;

  beforeEach(() => {
    page = new FirebaseTraversyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
