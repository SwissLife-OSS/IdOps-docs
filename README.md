# SETTING UP A DOCS-REPO

- [ ] Replace `PLACEHOLDER` by your product name. Note that in most cases it should only be in lowercase
- [ ] Change Project Images. Search for the old ones (/img/logo_sl_squadron\*.png)
- [ ] Edit FeatureCallout and GetStarted in website\pages\en\index.js
- [ ] Write some documentation including an Introduction and a Quickstart
- [ ] Create the Build/Release Pipeline. You can copy one from previous projects
- [ ] enable Github-Pages on the Code-Repository to make the documentation public
- [ ] Link Project in SwissLife-OSS Main Page
- [ ] Delete this section

# PLACEHOLDER Documentation

[Documentation](https://swisslife-oss.github.io/PLACEHOLDER/) for [PLACEHOLDER](https://github.com/SwissLife-OSS/PLACEHOLDER) project.

## Running this documentation on your local machine

run the following command in the root of this repository

```bash
docker-compose up
```

if you don't have docker installed you can try the following

```bash
cd website
yarn
yarn start
```

You can now acces the documentation in your browser under [localhost:3000/PLACEHOLDER](http://localhost:3000/PLACEHOLDER)
