{{#template name="tutorials.socially.angular2.step_02.md"}}
{{> downloadPreviousStep stepName="step_01"}}

Now it's time to make the web page dynamic — with Angular 2.

This step will still be focusing on client side Angular tools. The next one will show you how to get the full stack power of Meteor.

# Data in the View

In Angular, the view is a projection of the model through the HTML template. This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.

Let's change our template to be dynamic:

{{> DiffBox tutorialName="meteor-angular2-socially" step="2.1"}}

We replaced the hard-coded party list with the [NgFor](https://angular.io/docs/ts/latest/guide/displaying-data.html) directive and two Angular expressions:

- The `*ngFor="let party of parties"` attribute in the `li` tag is an Angular repeater directive. The repeater tells Angular to create a `li` element for each party in the list using the `li` tag as the template.
- The expressions wrapped in the double curly braces ( `{{dstache}}party.name}}` and `{{dstache}}party.description}}` ) will be replaced by the value of the expressions.

Angular 2 has _common_ directives that provide additional functionality to HTML. These include `ngFor`, `ngIf`, `ngClass`, _form_ directives (which will be heavily used on the 4th step) and more found in the [`@angular/common`](https://angular.io/docs/ts/latest/api/common/) package. Those common directives are globally available in every component template so you don't need to import them manually into the component's view, in comparison to a custom directive or routing directives.

# Component data

Now we are going to create our initial data model and render it in the view.
This code will go inside of our Socially class [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor). A constructor is a function that runs when a class is loaded, thus it loads the initial data for the class.

We can attach data with the context `this`, referring to the Socially class.

{{> DiffBox tutorialName="meteor-angular2-socially" step="2.2"}}

Run the app again.

    $ meteor
    
You'll see the data model, parties, is now instantiated within the Socially component.    

So our code works now, but probably you IDE or console says something like:

    client/app.ts (12, 10): Property 'parties' does not exist on type 'Socially'.

That's a TypeScript error that won't prevent your app from running but will give you extra information about your app.

To help TypeScript check our app better, lets define our `parties` property as it is, a [type](http://www.typescriptlang.org/Handbook#basic-types) of array made up of [generic](http://www.typescriptlang.org/Handbook#generics) Objects.:

{{> DiffBox tutorialName="meteor-angular2-socially" step="2.3"}}

Although we haven't done much, we connected the dots between the presentation, the data, and the business logic.

# Summary

You now have a dynamic app that features a full component.

But, this is still all client side — which is nice for tutorials, but in a real application we need to persist the data on the server and sync all the clients with it.

So, let's go to [step 3](/tutorials/angular2/3-way-data-binding) to learn how to bind our application to the great power of Meteor.

{{/template}}
