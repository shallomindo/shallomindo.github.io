import { publish } from 'gh-pages';

const repo = 'https://github.com/shallomindo/shallomindo.info.git';
let name = 'Ben Wu';
let email = 'benayaj.2004@gmail.com';

console.log(`Deploying to ${repo} as ${name} (${email})`)

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: repo, // Update to point to your repository
  user: {
   name: name, // update to use your name
   email: email // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
