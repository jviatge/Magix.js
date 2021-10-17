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
import { Magix } from 'm4gixjs'
```

Example basic usage:

```JAVASCRIPT
Magix({
    event:'click',     
    target:'#button' 
    animes:[
        {
            target:'#test',        
            css:{
                'background-color':['#00ff0c','#ffff00']
            },
        }
    ],
})
```

## 🪄 Base

Name object | Info | required
------------ | ------------- | -------------
`event` | Event ('click','hover') | true
`target` | Dom target event | false
`animes` | Array of object [animes](#-animes)  | true
`click` | Object click options  | false
`hover` | Object hover options | false

## 🪄 Options
### click
Name object | Info | Default value
------------ | ------------- | -------------
`toggleOut` | Toggle when click out element | true

### hover
Name object | Info | Default value
------------ | ------------- | -------------

## 🪄 animes

Name object | Info | required
------------ | ------------- | -------------
`target` | Dom target animation | true
`css` | Css event | false
`Class` | class event | false
`order` | Order timeline animation | false
`time` | Time of animation | false
<!-- `child` | Content from cell 2 | false -->



