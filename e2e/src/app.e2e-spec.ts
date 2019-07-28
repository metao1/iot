import { PersoinfoPage } from './app.po';

describe('PersoInfo App', () => {
    let page: PersoinfoPage;

    beforeEach(() => {
        page = new PersoinfoPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to PersoInfo!');
    });
});
