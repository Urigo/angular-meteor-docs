const markdownUrlBase = '/manuals/';

export const V3_0_0 = {
  isLatest: true,
  urlName: '3.0.0',
  displayName: 'Socially Merge',
  dateString: '15.06.2017',
  steps: [
    {
      url: '/setup',
      name: 'Bootstrapping',
      template: markdownUrlBase + 'templates/step1.md',
      youtubeVideoId: 'Y3Kikk5rPQk'
    },
    {
      url: '/chats-page',
      name: 'Chats page',
      template: markdownUrlBase + 'templates/step2.md',
      youtubeVideoId: 'U_PhcyXbMb8'
    },
    {
      url: '/rxjs',
      name: 'RxJS',
      template: markdownUrlBase + 'templates/step3.md'
    },
    {
      url: '/meteor-server-side',
      name: 'Realtime Meteor Server',
      template: markdownUrlBase + 'templates/step4.md'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'templates/step5.md'
    },
    {
      url: '/messages-page',
      name: 'Messages Page',
      template: markdownUrlBase + 'templates/step6.md'
    },
    {
      url: '/authentication',
      name: 'Users & Authentication',
      template: markdownUrlBase + 'templates/step7.md'
    },
    {
      url: '/chats-mutations',
      name: 'Chats Creation & Removal',
      template: markdownUrlBase + 'templates/step8.md'
    },
    {
      url: '/privacy',
      name: 'Privacy & Subscriptions',
      template: markdownUrlBase + 'templates/step9.md'
    },
    {
      url: '/filter-and-pagination',
      name: 'Filter & Pagination',
      template: markdownUrlBase + 'templates/step10.md'
    },
    { 
      url: '/android-testing',
      name: 'Android testing',
      template: markdownUrlBase + 'templates/step11.md'
    },
    {
      url: '/google-maps',
      name: 'Google Maps & Geolocation',
      template: markdownUrlBase + 'templates/step12.md'
    },
    {
      url: '/file-upload',
      name: 'File Upload & Images',
      template: markdownUrlBase + 'templates/step13.md'
    },
    {
      url: '/native-mobile',
      name: 'Native Mobile',
      template: markdownUrlBase + 'templates/step14.md'
    },
    { 
      url: '/addressbook',
      name: 'Addressbook integration',
      template: markdownUrlBase + 'templates/step15.md'
    },
    { 
      url: '/push-notifications',
      name: 'FCM Push Notifications',
      template: markdownUrlBase + 'templates/step16.md'
    },
    { 
      url: '/facebook',
      name: 'Facebook authentication',
      template: markdownUrlBase + 'templates/step17.md'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step18.md',
      hideCodeDiff: true
    }
  ]
};
