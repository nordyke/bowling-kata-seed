JavaScript Seed For Robert Martin's Bowling Game
================================================

Seed directory for practicing Robert Martin's Bowling Game Kata in JavaScript,
using [Jasmine](http://pivotal.github.com/jasmine/) as the unit test framework
and [Karma](http://karma-runner.github.io/0.12/index.html) as the test runner.

See [Bowling Game Kata PowerPoint](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&ved=0CEEQFjAB&url=http%3A%2F%2Fbutunclebob.com%2Ffiles%2Fdownloads%2FBowling%2520Game%2520Kata.ppt&ei=XxX8UPyUBPKO2QXJnQE&usg=AFQjCNFHxYawc054GuRAyXzmcYUfaJ1Z6g&sig2=noN8KNSdUpBC5wR7UHrkIw&bvm=bv.41248874,d.b2I)
for the steps of the Kata.  Uncle Bob's implementation is in Java, so you'll have
map the steps to JS.

*** Setup ***

1. Install [Node](http://nodejs.org/)
2. Install [Karma (via NPM)] (http://karma-runner.github.io/0.10/intro/installation.html).
3. In your terminal, move to the root level of the `bowling-kata-seed` repo, and enter
`karma start`.  A test runner should open in a new instance of Chrome.
Karama is now monitoring for any changes to `js/spec/*.js` and
`js/src/*.js`.
4. Start writing those failing tests in `js/spec/bowling.spec.js` and the code
make it pass in `js/src/bowling.js`.

Examples of the final code are in `final/`.
