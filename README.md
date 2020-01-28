# Acme Photos App

Hello! A straightforward coding challenge solution here! I've made an app that feeds off a mock API to make a photo gallery app! Features:

* Clicking on a photo thumbnail will enlarge the image in a lightbox
* Homepage has list of all photos - these lists are lazy loaded, so you need to click on "Load More" to view more images (and there are plenty, haha). Don't really like those "scroll to the bottom" auto-infinite scrolls because, sometimes you just want to read the footer, ya'know?
* There's a "Go Home" button on the top right if you need to go back to the main view
* Clicking on "View All Albums >>" will take you to a list of all albums
* Shows a carousel of the latest albums available, clicking on the album will go to its local album page
* Found out last-second there's support in this API for users! Maybe some other time, I can create a User Service & Provider, and filter the photos by user + have a nice profile page or something
* Just one se
* There should be a few unit/e2e tests, running off Jasmine/Protractor/Karma. Very simple tests, they should all be passing. Also the lint test passed fine for me, which is always nice :)
* The carousel + lightbox are third-party modules I grabbed off npm. I wanted to show at least _some_ styling skills so I didn't implement the usual Angular Material Design library, and made a very basic responsive container and gave it a splash of paint

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test`

## Running end-to-end tests

Run `ng e2e`

## Running lint test

Run `ng lint`
