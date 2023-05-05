<h1>Auto Badge Creator</h1>  
<br>

### Coverage

![Coverage][coverage-shield]
![Coverage Statements][coverage-statements-shield]
![Coverage Branches][coverage-branches-shield]
![Coverage Functions][coverage-functions-shield]
![Coverage Lines][coverage-lines-shield]
<br><br>

<!-- TOC -->
  * [About The Project](#about-the-project)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Config](#config)
    * [coverage file path](#coverage-file-path)
    * [README.md file path](#readmemd-file-path)
    * [Output type](#output-type)
    * [badges](#badges)
    * [Extended](#extended)
  * [Requirements](#requirements)
  * [Built With](#built-with)
<!-- TOC -->

## About The Project
Auto Badge Creator is a super easy to use tool for your project. It creates badges based on various parameters like [ test coverage ] and inserts them into the README.


## Installation
[`npm`](https://github.com/ritesh-angelone/auto-badge-creator):
```sh
npm install --save-dev https://github.com/ritesh-angelone/auto-badge-creator.git
```

## Usage

1. First you need to set up your test environment.   

    * jest   
    
      > In jest config you need to add 'json-summary' to coverageReporters. https://jestjs.io/docs/en/configuration  

    * mocha
      ```sh
      {
        "test": "nyc --reporter=json-summary mocha"
      }
      ```
      
      <br>
2. Insert one of the following keys anywhere in your README. These will be replaced by the coverage-badge-creator with the appropriate badge.

    The following keys are available:
     * $coverage$
     * $statements$
     * $branches$
     * $functions$
     * $lines$
 
    _important are also the surrounding dollar signs_  
    
    <br>
 3. Now you can create the badges.
 
    Add the command to your package.json scripts block:
    ```json
    "scripts": {
      "coverage:badge": "auto-badge-creator",
    }   
    ```
    
    and run it from the CLI:
    ```sh
    npm run coverage:badge
    ```
    

## Config
There are various ways to provide configuration for the badges. This library supports CosmicConfig. Cosmiconfig will search up the directory tree for configuration in the following places (in that order):

1. a 'auto-badge-creator' property in package.json
2. a .auto-badge-creatorrc file in JSON or YAML format
3. a .auto-badge-creatorrc.json, .auto-badge-creatorrc.yaml, .auto-badge-creatorrc.yml, .auto-badge-creatorrc.js, or .auto-badge-creatorrc.cjs file
4. a auto-badge-creatorrc, auto-badge-creatorrc.json, auto-badge-creatorrc.yaml, auto-badge-creatorrc.yml, auto-badge-creatorrc.js or auto-badge-creatorrc.cjs file inside a .config subdirectory
5. a auto-badge-creator.config.js or auto-badge-creator.config.cjs CommonJS module exporting an object

_For a simple example click [here](https://github.com/ritesh-angelone/auto-badge-creator/blob/main/.badge-configrc)._

### coverage file path
```
{
  coverage_file_path: './coverage/json-summary.json'
}
```

### README.md file path
```
{
  readmeFilePath: './README.md'
}
```

### Output type
```
{
  outputType: 'url' | 'markdown'
}
```

### badges
```
 {
   badges: {
     coverage: {
      logo: 'foo'
      color: 'bar'
     }
   }
 }
```
**Depending on your test tool, you will probably have the following badges available for configuration:**
 * coverage
 * statements
 * branches
 * functions
 * lines
 
 **Options**
 * style  
 ![plastic][style-plastic] ![flat][style-flat] ![flat-square][style-flat-square] ![flat-for-the-badge][style-for-the-badge] ![social][style-social]
 * logo  
  ![kotlin][logo-kotlin] ![medium][logo-medium] ![github][logo-github]
 * logoColor  
 ![blue][logo-blue] ![green][logo-green] ![white][logo-black]
 * color  
  ![blue][color-blue] ![green][color-green] ![white][color-black]
 * link  
  ![blue][link-github] ![green][link-medium] ![white][link-reddit]
 
 _For more information on all options, see -> ![](https://img.shields.io/badge/Shields.io-informational?style=for-the-badge&logo=Shields.io&logoColor=white&color=black&link=https://shields.io/)_

### Extended
**In addition, you have further options in the cli.**

* --config
  > This allows you to change the path and name of the configuration file.

  ```sh
  "scripts": {
    "coverage:badge": "coverage-badge-creator --config 'badge-config'",
  }
  ```

## Requirements
* Node > v10.0.0


## Built With
This section lists all programming languages and main frameworks.
* [Node](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)

<!--shield-styles-->
[style-plastic]: https://img.shields.io/badge/plastic-83A603.svg?style=plastic
[style-flat]: https://img.shields.io/badge/flat-83A603.svg?style=flat
[style-flat-square]: https://img.shields.io/badge/flat_square-83A603.svg?style=flat-square
[style-for-the-badge]: https://img.shields.io/badge/for_the_badge-83A603.svg?style=for-the-badge
[style-social]: https://img.shields.io/badge/social-83A603.svg?style=social

[logo-github]: https://img.shields.io/badge/logo-github.svg?logo=github
[logo-kotlin]: https://img.shields.io/badge/logo-kotlin.svg?logo=kotlin
[logo-medium]: https://img.shields.io/badge/logo-medium.svg?logo=medium

[logo-blue]: https://img.shields.io/badge/blue-83A603.svg?logo=github&logoColor=blue
[logo-green]: https://img.shields.io/badge/green-83A603.svg?logo=kotlin&logoColor=green
[logo-black]: https://img.shields.io/badge/black-83A603.svg?logo=medium&logoColor=black

[color-blue]: https://img.shields.io/badge/blue-83A603.svg?color=blue
[color-green]: https://img.shields.io/badge/green-83A603.svg?green=green
[color-black]: https://img.shields.io/badge/black-83A603.svg?color=black

[link-github]: https://img.shields.io/badge/Github-83A603.svg?link=https://github.com/
[link-medium]: https://img.shields.io/badge/Medium-83A603.svg?link=https://medium.com/
[link-reddit]: https://img.shields.io/badge/Reddit-83A603.svg?link=https://www.reddit.com/

<!--infos-->
[coverage-shield]: https://img.shields.io/badge/Coverage-96%25-83A603.svg?prefix=$coverage$
[coverage-statements-shield]: https://img.shields.io/badge/Statements-99%25-83A603.svg?prefix=$statements$
[coverage-branches-shield]: https://img.shields.io/badge/Branches-89%25-83A603.svg?prefix=$branches$
[coverage-functions-shield]: https://img.shields.io/badge/Functions-100%25-83A603.svg?prefix=$functions$
[coverage-lines-shield]: https://img.shields.io/badge/Lines-99%25-83A603.svg?prefix=$lines$