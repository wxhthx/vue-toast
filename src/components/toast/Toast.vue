<template lang="pug">
div.toast-container(v-if="ifGlobalPosition" :class="[position]" :style="globalPosition")
  div.toast(:class="[{'hidden': !visible}, theme]" :style="instancePosition")
    i {{message}}
div.toast-container(v-else :class="[position]")
  div.toast(:class="[{'hidden': !visible}, theme]" :style="instancePosition")
    i {{message}}
</template>
<script>
export default {
    data () {
        return {
            visible: true,
            position: '',
            message: '',
            theme: '',
            globalPosition: {
            },
            instancePosition: {
            }
        }
    },
    computed: {
        ifGlobalPosition () {
            for (let i in this.globalPosition) {
                return true
            }
            return false
        }
    }
}
</script>
<style lang="scss">
$white:  #fff !default;
$black:  #000 !default;
$red:    #d9534f !default;
$orange: #f0ad4e !default;
$yellow: #ffd500 !default;
$green:  #5cb85c !default;
$blue:   #0275d8 !default;
$teal:   #5bc0de !default;
$pink:   #ff5b77 !default;
$purple: #613d7c !default;
$inverse: #292b2c !default;
$faded: #f7f7f7 !default;
.toast-container {
    position: absolute;
    &.right {
        right: 0;
    }
    &.left {
        left: 0;
    }
    &.middle {
        top: 50%;
    }
    &.top {
        top: 0%;
    }
    &.bottom {
        top: 90%;
    }
}
.toast {
    position: relative;
    word-wrap:break-word;
    padding:10px;
    text-align: center;
    opacity: 0.9;
    transition: transform .5s;
    z-index:9999;
    font-size: 1rem;
    min-width: 15rem;
    max-width:80%;
    color: $white;
    border-radius: 5px;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
    &.hidden {
        transform:translate(-50%,-50%) scale(0);   
    }
    &.primary {
        background: $blue;
    }
    &.success {
        background: $green;
    }
    &.info {
        background: $white;
        color: $green;
    }
    &.warning {
        background: $yellow;
    }
    &.danger {
        background: $red;
    }
    &.inverse {
        background: $inverse;
    }
    &.faded {
        background: $faded;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: transform .5s
}
.fade-enter, .fade-leave-active {
  transform:translate(-50%,-50%) scale(0);
}
</style>
