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

### Base

------------ | -------------
`event`| Content from cell 2
`actions` | Content in the second column
`actions` | Content in the second column
`actions` | Content in the second column
`actions` | Content in the second column


### 🪄 animes

- `targets`
- `actions`
- `order`
- `child`
- `targets`
