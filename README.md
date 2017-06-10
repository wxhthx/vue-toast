# vue-toast

 toast vue
---

## Intro
> vue-awesome-toast is a vue plugin which based on vue.js and css3.With a easy approach to config, and lots of theme to be choosed to be imported in your project which based on Vue.js（Vue 2）.
It's interested that support multiple toasts diplaying on the same time, no one overspread each other.

## Live Demo
[Click me](https://wxhthx.github.io/v-easy-swiper/ "swiper") 

## Usage
```bash
# NPM Download
npm install vue-awesome-toast
```

```javascript
/**
*  import globally
*/
import Vue from 'vue'
import toast from 'vue-awesome-toast'
Vue.use(vue-awesome-toast, {})
```

```javascript
/**
* component config
*/
<script>

export default {
    data () {
        return {
        ...
        }
    },
    methods: {
        /**
        * current image click event
        */
        clickMethod: function (index) {
            this.$toast('hello world')
        }
    }
}
<script>
```

## Basic API
1. Global Config
```javascript
    const options = {
        position: 'left bottom',
        theme: 'success'
    }
    vue.use(toast, options)
```
2. Component instance config
```javascript
    const options = {
        message: 'hello world'
        position: 'right top',
        theme: 'waring'
    }
    this.$toast(options)
```
3. You must notice
> if the same property both exited in global and install config, the last one config will work, which means the instance config will overwriten the same property which exited in global config.
    So you can put the project common config in global, put detail config object which need to be custommade to instance config.
4. detail APIs:
* __position__ [(left || right && top ) || (middle || bottom)] (default: 'right top')
* __duration__ number (default: 2500)
* __theme__ [primary || success || info || warning || danger || inverse || faded] (default: 'info')

## advanced APIs
1. You can use __globalPosition__ property to overwrite the plugin default position、background、color etc... css properties in global environment

```javascript
const cssConfig = {
    backgroundColor: 'red',
    color: '#f3f3f3'
}
Vue.use(toast, {globalPosition: cssConfig})
```

2. Somewhile you just make one of toasts looks like better brilliant than others, you can use __instancePosition__ property to do it,just like above says, it not just  only can change position, but also bgColor、color ...etc
```javascript
const cssConfig = {
    backgroundColor: 'red',
    color: '#f3f3f3'
}
this.$toast({message: 'hello world'}, {globalPosition: cssConfig})
```

## License
MIT

