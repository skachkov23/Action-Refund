# Bon-Solutions project-template

## Setup:
- NPM module and create package.json file (npm init -y)
- Parcel (npm i -D parcel@1.12.3)
- Linters (js, html && scss(css))

    - npm i -D @linthtml/linthtml 
    - npm i -D stylelint stylelint-config-standard-scss
    - npm i -D eslint

- Concurrently (npm i -D concurrently)

- Run npx eslint --init command and choose next options:
    - To check syntax, find problems, and enforce code style
    - JavaScript modules (import/export)
    - None of these
    - Does your project use TypeScript? › No
    - here does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
    ✔ Browser
    - How would you like to define a style for your project? …
    ❯ Use a popular style guide
    - Which style guide do you want to follow? …
    ❯ Airbnb: [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
    - What format do you want your config file to be in? …
    ❯ JavaScript
    - Would you like to install them now with npm? › Yes

- Husky (npm i -D husky)
- Gh-Pages for Deploy (npm i -D gh-pages)

## npm commands:
- Run npm install (or just npm i)

  Description:

  npm install installs the project dependencies
- Run npm start

  Description:

  npm start runs the server required for development and tests
- Run npm run lint to check the code style
- Run npm run deploy to publish your site to GitHub pages

## git commands:
- Clone the repo be running git clone the-link-from-github
- Create the develop branch git checkout -b develop
- Save your changes git commit -am 'some message'
- Send your code to Github by running git push origin develop

## GitHun Pull Request:
- Create a Pull Request (PR) from your branch develop to branch main of original repo

## Steps:
- Click on 'Use this template' and create your project repository, than click on code -> HTTPS -> Copy link
- RCM on your project folder and LCM on 'GitBash here', run 'git clone' and paste the link
- Open your folder on VSCode
- Run npm install (or just npm i)
- Run npm start
- Create the develop branch git checkout -b develop
- Start working with layout
- When you finish one of your sections, or finish changes in header/footer etc

  Run npm run lint to check the code style and

  run git add . (add in your commit all modified or new files and folders)

  commit all your changes by Save your changes git commit -am 'some message'
- When you finish your job Send your code to Github by running git push origin develop

  and Run npm run deploy to publish your site to GitHub pages
- Create a Pull Request (PR) from your branch develop to branch main of original repo
- Add DEMO link in PR comments for reviewers of your project design

  (DEMO LINK (https://your-acc-name.github.io/your-repo-name/))

  or go to Settings of your repo, scroll till the GH Pages and click to check your demo (don't forget to copy URL)

  [EXAMPLE](https://skachkov23.github.io/Bon-solutions-template/)