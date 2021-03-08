# node-auth-mkdocs-material-ebook


## For Development

1. Clone this repo
2. Install Node dependencies: `npm i` (see `package.json`)
3. Run `npm start` to see the current state of the ebook.

To be able to edit the ebook you will need to follow these steps first:

1. Install Python 3.7+ on to your computer
2. Install [pip](https://pip.pypa.io/en/stable/installing/)
3. Install the Python Packages `pip install -r requirements.txt` (See `requirements.txt`)
4. `cd ebook-folder` to move into the Python package
5. Run `mkdocs build` to build the markdown files into static HTML files into the `site/` directory.
6. Run `mkdocs serve` to serve the files from `site/` to port 8000 **withOUT** username:password authentication
`cd ..`
7. Add `.env` file with environment variables
  
  ```txt
    STUDENT_USERNAME=a-username
    STUDENT_PASSWORD=a-password
    INSTRUCTOR_USERNAME=a-username
    INSTRUCTOR_PASSWORD=a-password
    PORT=5500
  ```

8. `cd ..` to root director and run `npm start` - to serve files from `site/` to port 5500 **with** username:password authentication

## To Deploy

1. Finish your changes and check them with `mkdocs serve`.
2. Before you add anything to staging run `mkdocs build`. This will ensure you've built the newest *intended* version of the ebook before you push it to GitHub.
3. `git status, add, commit, push ...` to repo
4. Create pull request & merge

## For New Deployments

Heroku will need some environment variables to perform authentication checks. Add them as you would the variables in `.env` file using [he CLI tools or the dashboard](https://devcenter.heroku.com/articles/config-vars).

How to install Python and pip instructions here:

## Functional Overview

Mkdocs is a Python package that generates statics web files (HTML, CSS, JS), seen in the `site/` directory, from plain Markdown files, seen in the `docs/` directory.

Material-Mkdocs is another Python package that builds on top of Mkdocs to provide design from the Material-UI Theme. The two receive their configuration from the `mkdocs.yaml` file. You'll see the navigation is is provided by the `nav:` property in that file and the Material Theme is the value of `theme:`.

The Express server is just an app used to serve the static files from `site/` behind basic authentication thus the Node app is deployed and not the Python code.