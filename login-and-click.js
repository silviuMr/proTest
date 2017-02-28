describe('Quick and dirty demo', function() {
    it('will do something in box', function() {
        browser.ignoreSynchronization = true
        browser.get('https://account.box.com/login');

        /**
         * Logging in
         */
        element(by.name('login')).sendKeys('justtesting2802@gmail.com');
        element(by.name('password')).sendKeys('IgnoreMeJustTesting');
        element(by.className('btn btn-primary btn-full-width')).click();
        expect(element(by.className('profile-image')).isPresent()).toBe(true);

        /**
         * Creating a new folder named First-Folder
         */
        element(by.css('div[class=menu-wrapper]>a>span')).click();
        expect(element(by.css('#menu-newdropdown')).isPresent()).toBe(true);
        element(by.css('#menu-newdropdown > li:nth-child(1) > button:nth-child(1)')).click();
        expect(element(by.css('.popup-wrapper')).isPresent()).toBe(true);
        element(by.css('input[name=folderName]')).sendKeys('First-Folder');
        element(by.css('button[data-resin-target=createfolder]')).click();

        /**
         * Open menu
         */
        element(by.css('li[data-name=First-Folder]>div[class=file-list-item-wrapper]>div[class=file-list-item-actions]>button[data-type=context-menu-btn]')).click();

        // var todoList = element.all(by.repeater('todo in todoList.todos'));
        // expect(todoList.count()).toEqual(3);
        // expect(todoList.get(2).getText()).toEqual('write first protractor test');
        //
        // // You wrote your first test, cross it off the list
        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
        // expect(completedAmount.count()).toEqual(2);
    });
});