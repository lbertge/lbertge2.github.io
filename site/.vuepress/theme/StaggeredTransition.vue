<template>
    <transition-group appear
        name="staggered-fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
    >
        <slot></slot>
    </transition-group>
</template>

<script>
import { TimelineLite } from 'gsap'

export default {
    data () {
        return {
            tl: new TimelineLite(),
            index: 0,
            DELAY_CONST: 0.2
        }
    },

    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = (this.index++) * this.DELAY_CONST
            this.tl.to(
                el, 
                1, 
                { opacity: 1, height: '1.6em', onComplete: done },
                delay
            )
        },
        leave: function (el, done) {
        }
    }
}
</script>

