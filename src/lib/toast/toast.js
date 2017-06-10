import Toast from '../../components/toast/Toast'
var toastPlugin = {}
toastPlugin.install = function (Vue, options) {
    const ToastController = Vue.extend(Toast)
    let removeDom = event => {
        if (event.target.parentNode.childNodes.length > 1) {
            event.target.parentNode.removeChild(event.target)
        } else {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        }   
    }

    ToastController.prototype.close = function () {
        // this.visible = false
        this.$el.addEventListener('transitionend', removeDom)
    }

    Vue.prototype.$toast = (option = {}) => {
        var instance = new ToastController().$mount(document.createElement('div'))
        let duration = option.duration || options.duration || 2500
        instance.message = typeof option === 'string' ? option : option.message
        instance.position = option.position || options.position || 'top right'
        // instance.vertical = option.vertical || options.vertical || 'top'
        instance.globalPosition = options.globalPosition || {}
        instance.instancePosition = option.instancePosition || {}
        instance.theme = option.theme || options.theme || 'info'
        let toastDom = document.getElementsByClassName('toast-container')
        if (toastDom.length) {
            instance.$el = instance.$el.childNodes[0]
            toastDom[0].append(instance.$el)
        } else if (!options.container) {
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
