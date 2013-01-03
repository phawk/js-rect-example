(function() {

    var expect = chai.expect;

    suite('Rect', function() {

        setup(function() {
            this.rect = new Rect();
        });

        teardown(function() {
            this.rect.hide();
            this.rect = null;
        });

        test('should exist', function() {
            expect(Rect).to.be.ok;
        });

        suite('When creating a new Rect', function() {

            test('should create an HTMLElement', function() {
                expect(this.rect._el instanceof HTMLElement).to.be.true;
            });

            test('should set the CSS positon to absolute', function() {
                expect(this.rect._el.style.position).to.equal('absolute');
            });

        });

        suite('color()', function() {

            test('should exist', function() {
                expect(typeof this.rect.color).to.equal('function');
            });

            test('should throw an Error if colour is not provided', function() {
                expect(this.rect.color).to.throw(Error);
            });

            test('should set the CSS background color', function() {
                this.rect.color('red');

                expect(this.rect._el.style.backgroundColor).to.equal('red');
            });

        });

        suite('position()', function() {

            test('should exist', function() {
                expect(typeof this.rect.position).to.equal('function');
            });

            test('should throw an Error if x or y are not passed in as ints', function() {
                expect(this.rect.position).to.throw(Error);
            });

            test('should set the left position to x value', function() {
               this.rect.position(100, 200);

                expect(this.rect._el.style.left).to.equal('100px');
            });

            test('should set the top position to y value', function() {
               this.rect.position(100, 200);

                expect(this.rect._el.style.top).to.equal('200px');
            });

        });

        suite('size()', function() {

            test('should exist', function() {
                expect(typeof this.rect.size).to.equal('function');
            });

            test('should throw an Error if width or height are not passed in as ints', function() {
                expect(this.rect.size).to.throw(Error);
            });

            test('should set the width', function() {
                this.rect.size(40, 60);

                expect(this.rect._el.style.width).to.equal('40px');
            });

            test('should set the height', function() {
                this.rect.size(40, 60);

                expect(this.rect._el.style.height).to.equal('60px');
            });

        });

        suite('show()', function() {

            test('should exist', function() {
                expect(typeof this.rect.show).to.equal('function');
            });

            test('should append the element to the DOM', function() {
                this.rect.color('rgb(249, 248, 247)');
                this.rect.size(20, 20);
                this.rect.position(10, 10);
                this.rect.show();

                var divs = document.querySelectorAll('body > div');

                var rect = divs[divs.length - 1];

                expect(rect.style.backgroundColor).to.equal('rgb(249, 248, 247)');
            });

        });

        suite('hide()', function() {

            test('should exist', function() {
                expect(typeof this.rect.hide).to.equal('function');
            });

            test('should remove element from the DOM', function() {
                this.rect.color('rgb(249, 248, 247)');
                this.rect.size(20, 20);
                this.rect.position(10, 10);
                this.rect.show();

                this.rect.hide();

                var divs = document.querySelectorAll('body > div');

                var rect = divs[divs.length - 1];

                expect(rect.style.backgroundColor).to.not.equal('rgb(249, 248, 247)');
            });

        });

        suite('constructor()', function() {

            test('should set size when passed', function() {
                var rect = new Rect(100, 80);

                expect(rect._el.style.width).to.equal('100px');
                expect(rect._el.style.height).to.equal('80px');
            });

            test('should set color when passed', function() {
                var rect = new Rect(null, null, 'red');

                expect(rect._el.style.backgroundColor).to.equal('red');
            });

        });

    });

})();