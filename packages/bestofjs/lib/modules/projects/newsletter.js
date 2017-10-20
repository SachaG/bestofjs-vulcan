/*

Newsletter setup

*/

import VulcanEmail from 'meteor/vulcan:email';
import { addCallback } from 'meteor/vulcan:core';
// email test routes (make available to client & server)
import Newsletters from 'meteor/vulcan:newsletter';
import { Projects } from './collection.js';
import moment from 'moment';

Newsletters.getSubject = projects => {
  const subject = projects.map((project, index) => index > 0 ? `, ${project.name}` : project.name).join('');
  return Utils.trimWords(subject, 15);
}

VulcanEmail.addEmails({

  newsletter: {
    template: 'newsletter',
    path: '/email/newsletter',
    // subject(data) {
    //   return _.isEmpty(data) ? '[Generated on server]' : Newsletters.getSubject(data.ProjectsList);
    // },
    subject: 'My awesome newsletter',
    // data() {
    //   return {
    //     date: moment().format('MMMM D YYYY')
    //   }
    // },
    query: `
      query NewsletterQuery{
        SiteData{
          title
        }
        ProjectsList{
          name
          fullName
          stargazers
          description
          repository
        }
        StoriesSingle{
          body
        }
      }
    `,
    // isValid(data) {
    //   return data.PostsList && data.PostsList.length;
    // },
    testVariables() {
      return {}
    }
  },

  newsletterConfirmation: {
    template: 'newsletterConfirmation',
    path: '/email/newsletter-confirmation',
    subject() {
      return 'Newsletter confirmation';
    }
  }

});

function MarkPostsAsScheduled (email) {
  const postsIds = _.pluck(email.data.PostsList, '_id');
  console.log(postsIds)
  const updated = Posts.update({_id: {$in: postsIds}}, {$set: {scheduledAt: new Date()}}, {multi: true}) // eslint-disable-line
  console.log(`updated ${updated} posts`)
}
addCallback('newsletter.send.async', MarkPostsAsScheduled);
