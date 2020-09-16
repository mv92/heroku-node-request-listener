### How to start the listener

##### This listener requires for the `heroku`, `node`, `npm` and `git` commands to work correctly.

#### Main commands
- Start the app `heroku ps:scale web=1`
- Stop the app `heroku ps:scale web=0`
- Apps status `heroku ps`
- Run the app locally `heroku local web`

#### Handful of instructions from the [official Heroku documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

- have a free [Heroku account](https://signup.heroku.com/signup/dc)

- `heroku` cli
  - `brew install heroku/brew/heroku` install
  - `heroku login` log in

- Prepare the app
  - `git git@github.com:mv92/heroku-node-request-listener.git` Clone the repo
  - `cd heroku-node-request-listener` Enter the directory
  - `web: node index.js` Update the `Procfile` file to match your starting command

- Deploy the app
  - `heroku create` Create an app on Heroku and prepares it to receive your source code
  - `git push heroku main` Deploy your code
  - `heroku ps:scale web=1` Ensure that at least one instance of the app is running
  - `heroku open` Open the app from the link from push logs or by shortcut

- `heroku logs --tail` View logs
