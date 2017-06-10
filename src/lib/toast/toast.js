// import Vue from 'vue'
import Toast from '../../components/toast/Toast'
var toastPlugin = {}
toastPlugin.install = function (Vue, options) {
    const ToastController = Vue.extend(Toast)
    let removeDom = event => {
        event.target.parentNode.removeChild(event.target)
    }

    ToastController.prototype.close = function () {
        this.visible = false
        this.$el.addEventListener('transitionend', removeDom)
    }

    Vue.prototype.$toast = (option = {}) => {
        var instance = new ToastController().$mount(document.createElement('div'))
        let duration = option.duration || options.duration || 2500
        instance.message = typeof option === 'string' ? option : option.message
        instance.position = option.position || options.position || 'top right'
        instance.theme = option.theme || options.theme || 'info'
        if (!options.container) {
            document.body.appendChild(instance.$el)
        } else {
            document.getElementById(options.container).children[0].appendChild(instance.$el)
        }        
        instance.visible = true
        setTimeout(function () {
            instance.close()
        }, duration)
        return instance
    }
}

export default toastPlugin
