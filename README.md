## How to start the listener

I delegated writing of the commit messages to `git commit -m "$(curl -s http://whatthecommit.com/index.txt)"` so please, no judging!

#### This listener requires for the `heroku`, `node`, `npm` and `git` commands to work correctly.

#### Main commands

- Apps status `heroku ps`
- Start the app `heroku ps:scale web=1`
- Stop the app `heroku ps:scale web=0`
- Alternative temporary stop `heroku ps:stop web`
- Run the app locally `heroku local web`

### Handful of instructions from the [official Heroku documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

- have a free [Heroku account](https://signup.heroku.com/signup/dc)

- Heroku cli
  - `brew install heroku/brew/heroku`
  - `heroku login`

- Prepare the app
  - `git clone git@github.com:mv92/heroku-node-request-listener.git` Clone the repo
  - `cd heroku-node-request-listener` Enter the directory

- Deploy the app
  - `heroku create` Create an app on Heroku and prepares it to receive your source code
  - `web: node index.js` Update the `Procfile` file to match your starting command
  - `git push heroku main` Deploy your code
  - `heroku ps:scale web=1` Ensure that at least one instance of the app is running
  - `heroku open` Open the app from the link from push logs or by shortcut

- `heroku logs --tail` View logs
