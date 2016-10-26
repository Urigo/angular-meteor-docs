{{#template name="tutorials.socially.angular2.step_18.md"}}
{{> downloadPreviousStep stepName="step_17"}}

In this chapter we will add @angular/material to our project, and update some style and layout in the project.

Angular material documentation of each component can be found [here](https://github.com/angular/material2/tree/master/src/lib).

# Removing Bootstrap 4

First, let's remove our previous framework (Bootstrap) by running:

    $ meteor npm uninstall --save bootstrap

And let's remove the import from the `main.sass` file:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.2"}}

# Adding @angular/material

Now we need to add @angular/material to our project - so let's do that.

Run the following command in your Terminal:

    $ meteor npm install @angular/material --save

Now let's load the modules into our `NgModule`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.4"}}

Like we did in the previous chapter - let's take care of the navigation bar first.

We use directives and components from Angular Material - such as `md-toolbar`.

Let's use it in the main component's template:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.5"}}

And let's add `.fill-remaining-space` CSS class:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.6"}}

# PartiesForm component

Let's replace the `label` and the `input` with simply the `md-input` and `md-checkbox` and make the `button` look material:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.7"}}

We use the `mdInput` component which is a wrapper for regular HTML input with style and cool layout.

# PartiesList component

PartiesForm component is done, so we can move one level higher in the component's tree. Time for the list of parties:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.8"}}

To make it all look so much better, let's add couple of rules to css:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.9"}}

# PartyDetails component

We also need to update the PartyDetails component:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.10"}}

# Custom Authentication Components

Our next step will replace the `login-buttons` which is a simple and non-styled login/signup component - we will add our custom authentication component with custom style.

First, let's remove the login-buttons from the navigation bar, and replace it with custom buttons for Login / Signup / Logout.

We will also add `routerLink` to each button, and add logic to hide/show buttons according to the user's login state:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.11"}}

Let's use `InjectUser` decorator, just like we did in one of the previous chapters.

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.12"}}

As you can see, we used `DisplayNamePipe` in the view so we have to import it.

We also implemented `logout()` method with `Meteor.logout()`. It is, like you probably guessed, to log out the current user.

Now we can move on to create three new components.

### Login component

First component, is to log in user to the app.

We will need a form and the login method, so let's implement them:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.13"}}

> Notice that we used `NgZone` in our constructor in order to get it from the Dependency Injection, and we used it before we update the result of the login action - we need to do this because the Meteor world does not update Angular's world, and we need to tell Angular when to update the view since the async result of the login action comes from Meteor's context.

You previously created a form by yourself so there's no need to explain the whole process once again.

About the login method.

Meteor's accounts system has a method called `loginWithPassword`, you can read more about it [here](http://docs.meteor.com/api/accounts.html#Meteor-loginWithPassword).

We need to provide two values, a email and a password. We could get them from the form.

In the callback of Meteor.loginWithPassword's method, we have the redirection to the homepage on success and we're saving the error message if login process failed.

Let's add the view:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.14"}}

We also need to define the `/login` route:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.15"}}

And now let's create an index file for the auth files:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.16"}}

And import the exposed Array into the `NgModule`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.17"}}

### Signup component

The Signup component looks pretty much the same as the Login component. We just use different method, `Accounts.createUser()`. Here's [the link](http://docs.meteor.com/api/passwords.html#Accounts-createUser) to the documentation.

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.18"}}

And the view:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.19"}}

And add it to the index file:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.20"}}

And the `/signup` route:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.21"}}

### Recover component

This component is helfup when a user forgets his password. We'll use `Accounts.forgotPassword` method:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.22"}}

Create the view:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.23"}}

And add it to the index file:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.24"}}

And add the `/reset` route:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.25"}}

That's it! we just implemented our own authentication components using Meteor's Accounts API and Angular Material!

> Note that the recovery email won't be sent to the actual email address, since you need to configure `email` package to work with your email provider. you can read more about it [here](https://docs.meteor.com/api/email.html).

# Layout and Flex

In order to use flex and layout that defined in Material, we need to add a bug CSS file into our project, that defined CSS classes for `flex` and `layout`.

You can find the CSS file content [here](https://github.com/Urigo/meteor-angular2.0-socially/blob/364a8e6ce26b3dba5b8dc89421a09a261fe6369e/client/imports/material-layout.scss).

So let's copy it's content and add it to `meteor-angular2.0-socially/client/imports/material-layout.scss`.

Now let's add it to the main SCSS file imports:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.27"}}

And let's add another CSS class missing:

{{> DiffBox tutorialName="meteor-angular2-socially" step="19.28"}}

> The import of this CSS file is temporary, and we will need to use it only because `@angular/material` is still in alpha and not implemented all the features.

# Summary

In this chapter we replaced Boostrap4 with Angular Material, and updated all the view and layout to match the component we got from it.

We also learnt how to use Meteor's Accounts API and how to implement authentication view and components, and how to connect them to our app.

{{/template}}
