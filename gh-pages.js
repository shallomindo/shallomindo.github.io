import { publish } from 'gh-pages';

const repo = 'https://github.com/shallomindo/shallomindo.info.git';
let name = 'shallomindo';
let email = 'info.shallomindo@gmail.com';

console.log(`Deploying to ${repo} as ${name} (${email})`)

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo, // Update to point to your repository
  user: {
   name, // update to use your name
   email // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
