# vue-toast

 toast vue
---

## Intro
> vue-awesome-toast is a vue plugin which based on vue.js and css3. It has a easy approach to config and lots of theme to be choosed .Then just import it into your project which based on Vue.js（Vue 2）.
It's interesting that supporting multipled toasts diplayed on the same time, neither overspreads each other.

## Live Demo
[Click me](https://wxhthx.github.io/vue-toast/ "vue-awesome-toast") 

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
> if the same property both exited in global and instance config, the last one config will work, which means that instance config will overwrite the same property which exited in global config.
    So you can make the common toast config of project globally , and put detail config object which needs to be custommade in instance component.
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

2. Somewhile you just make one of toasts which looks like better brilliant than others, you can use __instancePosition__ property to do it, as has been said above, it can not only change position, but also bgColor、color ...etc

```javascript
const cssConfig = {
    backgroundColor: 'red',
    color: '#f3f3f3'
}
this.$toast({message: 'hello world'}, {globalPosition: cssConfig})
```

## License
MIT

