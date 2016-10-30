{{#template name="tutorials.whatsapp.meteor.step_05.md"}}
{{> downloadPreviousStep stepName="step_04"}}

Our next step is about adding new chats. So far we have the chats list implemented and user management, we just need to connect the two.

We will open the new chat view using `Ionic`'s modal dialog, so first let's add a button that opens this dialog to the chats list:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.1"}}

This button calls a controller method, which we will implement now in the controller:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.2"}}

Note that we first create the modal dialog with a template, and later on we will implement the logic of showing it on screen.

Now let's add the view of this modal dialog, which is just a list of users:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.3"}}

And in order to open this modal, we will create a service that takes care of it:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.4"}}

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.5"}}

And now we will add the controller of this view, and use the `NewChat` service:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.6"}}

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.7"}}

It includes the users collection and a function for creating a new chat. This function is not yet implemented in the server, so let's create it:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.8"}}

We will also rewrite the logic of `removeChat()` function in the `ChatsCtrl` and we will call a server method instead (which will be explained why further in this tutorial):

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.9"}}

And we will implement the method on the server:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.10"}}

The next messages won't include the username, only the user id, so we need to change the logic of username display. We will add a filter that fetches the user object from the users collection according to the `userId` property of the chat object:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.11"}}

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.12"}}

And we will also create the same logic for fetching the user's image:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.13"}}

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.14"}}

And we will add the usage of this filter in the chats list:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.15"}}

And in the chat view:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.16"}}

Now we want to get rid of the current data we have, which is just a static data.

So let's stop our `Meteor`'s server and reset the whole app by running:

    $ meteor reset

Let's add some users to the server instead of the old static data:

{{> DiffBox tutorialName="whatsapp-meteor-tutorial" step="5.17"}}

Run it again, and this should be the result of the new Modal we created:

{{tutorialImage 'whatsapp-meteor' '15.png' 500}}

Cool! and now clicking a user will open a chat with that user.

Our last part of this step is to remove `Meteor`'s package named `insecure`.

This package provides the ability to run `remove()` method from the client side in our collection. This is a behavior we do not want to use because removing data and creating data should be done in the server and only after certain validations, and this is the reason for implementing the `removeChat()` method in the server.

`Meteor` includes this package only for development purposes and it should be removed once our app is ready for production.

So remove this package by running this command:

    $ meteor remove insecure


{{/template}}
