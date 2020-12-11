# Travel Site

This is a single, static, HTML page built using modern skills, tools, and best practices with organized, well structured JavaScript and CSS.

### About this project, skills, tools and features.

  - Git in the command line using VS Code editor
  - GitHub for version control
  - Node, NPM and Webpack for automation
  - Utilize webpack-dev-server to upddate CSS & JS in the browser without a full reload and to reload the browser when a HTML file is changed
  - Use PostCSS for mixins, variables and nesting along with the modular stylesheets
  - Use the BEM methodology to avoid a bloated code base
  - Using a mobile-first strategy
  - Animated the hamburger menu icon
  - Using responsive and hi resolution images - Serving different images depending on the users screen size and resolution
  - Lazy loading images
  - Object-oriented JavaScript
  - Using a js module pattern
  - Using code splitting to load the modal script on click only if it hasn't already been downloaded
  - Use a sticky header on desktop with scaled logo on scroll
  - Reveal elements on scroll
  - Utilize webpack to run the dev environment and to build the distribution package
  - Utilize Netlify to add a simple cloud function
  - Integrated React into the workflow
  - Utilize Netlify to hook into the GitHub repository and build/publish the page whenever a new commit is pushed to master. [View page](https://zen-meitner-405009.netlify.app/)
  
### Installation
This app requires Node.js to run.
Clone the repo to your local machine
```sh
$ git clone https://github.com/Fettabachi/travel-site.git
```
Install dependencies
```sh
$ npm install
```
Start the server
```sh
$ npm run dev
```
View the app in your favorite browser. You can change the port in webpack.config.js
```sh
http://localhost:4000
```
Build the dist package
```sh
$ npm run build
```
#### Note to self
>The ClientArea module will not work on your local machine without some code modification. See the comments in App.js and /cloud-functions/secret-area.js