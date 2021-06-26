<p align="center">
    <img src="./docs/logoMagix.png" width="600"><br/>
</p>

## 🧙‍♂️ Introduction

🪄✨ Fast annimation creation only with javascript 🪄✨

## 🧙‍♂️ Install
⭐️
`npm i m4gixjs --save`

## 🧙‍♂️ Usage

Import module:

```JAVASCRIPT
import Magix from 'm4gixjs'
```

Example basic usage:

```JAVASCRIPT
Magix({
    event:'click',      
    options:{
        targets:'#test',
    }, 
    animes:[
        {
            targets:'#test',        
            actions:{
                'background-color':['#00ff0c','#ffff00']
            },
        }
    ],
})
```

### 🪄 Base

Name object | Second Header
------------ | -------------
`event`| `click` #require
`options` |[options](#-options)
`animes` |[animes](#-animes)

### 🪄 options
(#-options)

Name object | Second Header
------------ | -------------
`targets` | Content from cell 2
`actions` | Content from cell 2
`order` | Content from cell 2
`child` | Content from cell 2
`targets` | Content from cell 2

### 🪄 animes
(#-animes)

Name object | Second Header
------------ | -------------
`targets` | Content from cell 2
`actions` | Content from cell 2
`order` | Content from cell 2
`child` | Content from cell 2
`targets` | Content from cell 2
`timer` | Content from cell 2


