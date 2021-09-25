# Testing

:::tip Resources

- [cypress-io/cypress-example-recipes](https://github.com/cypress-io/cypress-example-recipes)
- [cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app)
- [https://css-tricks.com/front-end-testing-is-for-everyone/](https://css-tricks.com/front-end-testing-is-for-everyone/)
- [Youtube](https://www.youtube.com/watch?v=CYcdT-tOvB0&list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo)
- [Youtube](https://www.youtube.com/watch?v=OIAzwr-_jhY)
- count npm library
- Dummy app
  - [example.cypress.io](https://example.cypress.io)
  - [trytestingthis.netlify.app](https://trytestingthis.netlify.app/)
  - OrangeHRM
- [Dashboard Ex- TODOMVC](https://on.cypress.io/dashboard/projects/245obj/runs)
  :::

Role - Quality assuarance (QA) Developer

1. Frontend Testing (UI)
2. Backend Testing (Server, DB)

## Frontend testing

- **Test**

  - Performance
  - User interaction
  - Accessibility
  - Time to complete tests
  - Multiple devices
  - Browsers
  - Mostly we disconnect from server and use custom data
  - Test coverage (20% code cause 80% errors)

- **Tools**
  1. Lighthouse
     - integrated in Google chrome browser
     - Checks Performance & Accessibility
  2. [Web page test](https://www.webpagetest.org/)
  3. [Pingdom](https://www.pingdom.com/)

### Front-End Performance Optimization

1. Css loading
2. Reduce Http request
3. Prefetch _(image, links , content, etc)_
4. Gzip compression
5. Image Optimization _(Optimizilla; Kraken.io; Optimus.)_
6. Advanced Performance Metrics Monitoring
   - **Speed Index** — an average time it takes to load all blocks of the page;
   - **First Contentful Paint** — this gets triggered when a section of content is defined in the Document Object Model;
   - **First Meaningful Paint** — gets triggered by an above-the-fold layout change that’s bigger than the rest;
   - **Input Latency** — a delay between receiving and displaying the signal;
   - **Time to Interactive** — time needed for a page to become fully interactive. _Interactivity means - content displayed, event handlers registered, page response time < 50ms_

## Types of Frontend Testing

<vc-img url='https://i.imgur.com/9uSbiF6.png' size=''/>

- Acceptance
- Cross-browser compatibility (OS, device & browsers )

### Unit

- Test the smallest testable code eg: a function like `add(a,b)`
- Give inputs & check output
- **Possible tools:** _AVA, Jasmine, Jest, Karma, Mocha_

### Integration

- Combine units into a group
- **Possible tools:** _AVA, Jest, Testing Library_

### End-to-end

- How user see & interacts from one point to another ?
- Unit & Integration test doesn't cover UI.
- Uses real/Headless browser & mostly real API. We can use Test/Production environment.
- Tests user interactions in a real-life browser by providing it instructions for what to do and expected outcomes.
- Checks for data integrity in system, its dependencies & between components
- **Possible tools:** _Cypress, Puppeteer_

### Accessibility

- Hearing & Visual disabilities
- **Possible tools:** _AccessLint, axe-core, Lighthouse, pa11y_

### Visual Regression

- It is done when a new feature is added
- Take screenshots of before/after feature
- Check screenshots using image comparison tools
- **Possible tools:** _Cypress, Percy, Applitools_

### Performance

- Involves - stability, speed, responsiveness,
- **Possible Tools:** _Lighthouse, PageSpeed Insights, WebPageTest, YSlow_

### Acceptance

- Check to system vis-a-vis Business requirements

### Cross-browser compatibility

- Multiple OS, devices & browses combination
