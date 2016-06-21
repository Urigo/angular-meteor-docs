{{#template name="tutorials.socially.angular2.step_00.md"}}

Let's start building our Angular 2.0 Meteor Socially app.

In this step, we will:

- Setup Meteor and create a working app
- Become familiar with the app's structure
- Connect an Angular 2 front end
- Run the application in the browser

# Meteor Setup

First step — let's install Meteor!

Open your command line and paste this command:

    $ curl https://install.meteor.com/ | sh

> If you are on a Windows machine, go [here](https://www.meteor.com/install) to install Meteor.

Now let's create our app — write this in the command line:

    $ meteor create socially

Now let's see what we've got. Go into the new folder:

    $ cd socially

Run the app like so:

    $ meteor

    => Started proxy
    => Started MongoDB.
    => Started your app.
    >=> App running at: http://localhost:3000/

Now go to [http://localhost:3000/](http://localhost:3000/)
and look at the amazing app that's running on your computer!

We now have a fully functional app which includes both a server and a client!

The default Meteor app starts life with three files in the `client` directory: one `js`, one `html` and one `css` file.

We are going to add our own files for this tutorial. So let's start by deleting these files:

    - /client/main.css    (delete)
    - /client/main.html   (delete)
    - /client/main.js     (delete)
    - /server/main.js     (delete)

Now we can start building our app.

Create a new `index.html` file in the client folder, and place this code inside. Then run the app again.

{{> DiffBox tutorialName="meteor-angular2-socially" step="0.1"}}

And Meteor build tool refreshes automatically and our app is updated in the browser.

Note that there is no `<html>` tag and no `<head>` tags in our code.

This is because of how Meteor structures and serves files to the client.

Meteor scans all the HTML files in your application and concatenates them together to make it simpler for us.

Concatenation means merging the content of all `HTML`, `HEAD` and `BODY` tags found inside these HTML files together.

So in our case, Meteor found our `index.html` file, recognized it was meant for the client only (because it's inside the `client` folder), found the `BODY` tag inside and added it's content to the `BODY` tag of the main generated file.

> (`right-click` -> `inspect element` on the page to see the generated file Meteor served to the client)

# Adding Angular 2 and it's dependencies

It's time to add Angular 2 to our stack!

In the command line, launch those commands:

    $ meteor remove blaze-html-templates
    $ meteor add angular2-compilers barbatus:angular2-runtime

    $ meteor npm install --save angular2-meteor @angular/platform-browser-dynamic

> You might see a lot of warning messages if you are using NPM v2, it is okay and if you are interested to know more about these warning, you can [read here](http://blog.npmjs.org/post/110924823920/npm-weekly-5).

**Why `angular2-compilers`?**

In order to use `TypeScript` and the replacement for `blaze-html-templates` package.

**Why `barbatus:angular2-runtime`?**

To avoid importing `reflect-metatada` and `zone.js` (more about it [here](https://github.com/Urigo/angular2-meteor#install-package)).

You also may consider running:
    $ meteor npm install --save angular2-meteor-polyfills
(actually, in several cases, we notice an error if the install is not done manually "Error: Cannot find module 'angular2-meteor-polyfills/browser'")

Also run:

    $ meteor npm install

To make sure all npm dependencies are installed.    

## Typescript

An Angular 2 Meteor app can be written in regular JavaScript (ES5), the new JavaScript (ES2015 aka ES6) or TypeScript on both the server and the client.

TypeScript is the recommended choice by the Angular team so in this tutorial, we'll be using TypeScript.

Don't worry if you're not familiar with TypeScript. Valid ES6 or ES5 JavaScript is a valid TypeScript and we will explain new concepts when we would need them in the tutorial.

> If you'd like to deep dive into TypeScript, we recommend the [official tutorial](http://www.typescriptlang.org/Tutorial).

To start we need to add a TypeScript configuration file named `tsconfig.json` into our project:

{{> DiffBox tutorialName="meteor-angular2-socially" step="0.3"}}

Those are the basic configurations to run an Angular 2.0 Meteor app.

To learn more about Typescript compiler options, [click here](http://www.typescriptlang.org/docs/handbook/compiler-options.html).

### TypeScript Typings

We need to let Typescript know about all the types in the libraries we depend upon.

In order to do that — thus adding full type-checking support at this stage — we'll use a special tool for typings installation
and management called `typings`. You can find more information about it [here](https://github.com/typings/typings).

In our case, we'll need to execute commands as follows to install all dependencies:

        $ sudo npm install typings -g
        $ typings init
        $ typings install es6-promise --save
        $ typings install dt~es6-shim --global --save
        $ typings install registry:env/meteor --global

If you look into the typings folder after the execution, you'll find there a definition file called `index.d.ts`.

This is a top level definition file that links all other definition files installed by `typings`.

> Note that in some cases, your IDE can mark your code as "error" or "warning" because of missing Typings - this will not prevent you from running your app, but it is highly recommended to resolve those errors.

That's it! Now we can use Angular 2's power in our Meteor app!

# Root Component

Angular 2 code is structured as a tree of components.

Each component is a controller with an attached view.

Since it's a tree, there should be a root component and branch components
that stem out of it. So let's create our root component.

Create a new `app.ts` file inside of the `client` folder.

{{> DiffBox tutorialName="meteor-angular2-socially" step="0.6"}}

First we're importing the dependencies we needed from `@angular/core` and `@angular/platform-browser-dynamic`. This is not a folder and files in your directory, but a reference to CommonJS modules aliased as `@angular/core` and `@angular/platform-browser-dynamic`, which in fact located under your `node_modules` directory.

Notice, the Component's selector matches the `<app>` tag we will provide in `index.html` below, and the View template creates the view.

The class, Socially, inherits from `@Component` which is part of Angular 2.

Finally, we `bootstrap` our component, thus, marking it as the root component.

> You can see another example of Meteor's power and simplicity - no need to include this file anywhere. Meteor takes care of it by going through all the files in the project and include them automatically.

Our component is linked to it's template with the `templateUrl` property, let's create the template:

{{> DiffBox tutorialName="meteor-angular2-socially" step="0.7"}}

The only thing left before we can run our app is to import the root module and
add the `<app>` tag to `index.html`.

{{> DiffBox tutorialName="meteor-angular2-socially" step="0.8"}}

Importing the root module every time looks like a repetitive task.
Here comes some good news — the Angular 2 Meteor package recognizes the file named `app.ts`.
If you have one in the app root folder, the package will import it for you without even having to ask.

Let's run the app:

    $ meteor

> If the template doesn't change, it may be because your browser is caching the original template.
> Learn [how to disable caching during development](https://developer.chrome.com/devtools/docs/settings) in Chrome.

And we have our first Angular 2.0 Meteor app working!

Let's go through some of the technologies we used till now:

# npm

Npm stands for Node Packages Manager, which manages your dependencies and external packages.

Meteor supports NPM packages (starting from 1.3), and when we created our project - a file named `package.json` was created - this file contains the project's npm dependencies and some other metadata.

To install the current project dependencies, type in the command line `npm install`.

We also used Meteor packages (`meteor add ...`).  Meteor packages have some abilities that npm packages don't have yet so we will use some packages from there as well.

## ES6 Modules and CommonJS

Meteor supports [ES6 modules](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import) out of the box.

This feature provides the ability to use `import` / `export` statements and gives you a full control for modules loading and dependencies.

You can read more about how modules work and how it's based on CommonJS [on the Meteor docs](http://docs.meteor.com/#/full/modules).


# Summary

Let's continue to [step 1](/tutorials/angular2/static-template) and add some content to our application.

{{/template}}
