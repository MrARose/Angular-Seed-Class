'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {
    var htmlElement;
    var inElement;
      

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function()     {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

    function checkForField(fieldName,textVal,expectText,isShouldClearEdit) 
      {
        it('should have a "' + fieldName + '" label', function() {
            htmlElement = element(by.id('lbl' + fieldName));
            expect(htmlElement).not.toBe(undefined);
            expect(htmlElement.getText()).toEqual(fieldName + ':');
        });

       it('should have a "' + fieldName + '" edit', function() {
            htmlElement = element(by.id('ed' + fieldName));
            expect(htmlElement).not.toBe(undefined);
        });

        it('should have a "' + fieldName + '" span', function() {
            htmlElement = element(by.id('s' + fieldName));
            expect(htmlElement).not.toBe(undefined);
            var inElement = element(by.id('ed' + fieldName));
            if(isShouldClearEdit)
            {            
                inElement.clear();
            }
            inElement.sendKeys(textVal);
            expect(htmlElement.getText('value')).toEqual(expectText);
        });
      }

    checkForField('Make','Dodge','Dodge',true);
    checkForField('Model','Viper','Viper',true);
    checkForField('Year','2012','2012',false);
    checkForField('Price','99000','$99,000.00',true);

});


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

    it('should have a list of cars and should have the correct number of rows', function() {
        var rows = element.all(by.repeater('car in cars'));
        expect(rows.count()).toBe(4);
    });

    it('should have "Honda" as the make in the first row', function() {
        var rows = element.all(by.repeater('car in cars'));
        rows.first().then( function(row) {
            var rowItems = row.findElements(by.tagName('td'));
            rowItems.then(function(cols) {
               expect(cols[0].getText()).toMatch('HondaA');
            });
        });
    });

  });
});
