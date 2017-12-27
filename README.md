# Html Boilerplate

A simple html boilerplate code.

## Getting Started for run this app in local.

Clone the repo or fork it (if you planed to contribute then fork it). Navigate to that project directory. And start the localserver.

Note: Linux | Mac user: try this for start local python server (many unix family OS shipped with python)
```
python -m SimpleHTTPServer
```

## Getting Started for development

### Prerequisites

* [Node](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)


### Installing

Change the branch for the development

```
git checkout dev
```

Install development dependencies with npm
Run this command in your project directory:

```
npm install
```

For development build  
(if you do any change, then need to rebuild to reflect the code)

```
npm run build
```

For development build and watch changes

```
npm run watch
```


## Deployment

For production deployment.
First push dev branch into origin for track development changes.

For production build

```
npm run build-prod
```

After this, production code is available in dist folder.
Note: cross check once with in the `dist` folder. (it should be full working app).

For github deployment:
Then, with in the dist folder commit the changes and push to master.

```
git push origin master
```

If you done some cool updates, it may be useful for others. Rise a pull request to a main repo.
Note: for push changes under your forked repo, then change the remote origin path in dist folder.


## Author

* **Surender Lohia** - [SurenderLohia](https://github.com/SurenderLohia)

## License

This project is licensed under the MIT License - see the [LICENSE](https://surender.mit-license.org/) for details

## Acknowledgments

* [html shell](http://htmlshell.com/)
* [Node](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [doT](http://olado.github.io/doT/)
* [Prism](http://prismjs.com/)
* [clipboard.js](https://clipboardjs.com/)
* [webpack](https://webpack.js.org/)
* [gulp](http://gulpjs.com/)
* [You might not need jquery](http://youmightnotneedjquery.com/)
* [MIT License](https://mit-license.org/)
* [dom-to-image](https://github.com/tsayen/dom-to-image)
