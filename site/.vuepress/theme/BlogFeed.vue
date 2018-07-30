<template>
    <div class="page">
        <div class="content">
        <p>
            <staggered-transition>
              <div v-for="(blogItem, i) in blog.children" :key="i" class="post">
                <div class="item">
                  <router-link :to="blogItem.path">{{blogItem.title}}</router-link>
                </div>
                <div class="item" style="text-align: right">
                  {{prettyDate(blogItem.date)}}
                </div>
                {{blogItem.excerpt}}
              </div>
            </staggered-transition>
        </p>
        </div>
    </div>
</template>

<script>
import { getGitFirstUpdatedTimeStamp } from './util'
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink from './SidebarLink.vue'
import StaggeredTransition from './StaggeredTransition.vue'
import { TimelineLite } from 'gsap'
export default {
  components: { SidebarGroup, SidebarLink, StaggeredTransition },
  props: ['items'],
  data () {
    return {
      openGroupIndex: 0,
      tl: new TimelineLite()
    }
  },
  computed: {
    blog () {
      return this.items[0]
    }
  },
  methods: {
    prettyDate (timestamp) {
      return new Date(timestamp)
        .toString()
        .split(' ')
        .slice(1, 4)
        .join(' ')
        .replace(/( \d+)$/, ',$1')
    }
  },

  mounted () {
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl';
@require './styles/wrapper.styl';

.post {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.item {
  width: 100%;
  justify-content: space-between;
}

.page {
  padding-bottom: 2rem;
}

.page-edit {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;

  .edit-link {
    display: inline-block;

    a {
      color: lighten($textColor, 25%);
      margin-right: 0.25rem;
    }
  }

  .last-updated {
    float: right;
    font-size: 0.9em;

    .prefix {
      font-weight: 500;
      color: lighten($textColor, 25%);
    }

    .time {
      font-weight: 400;
      color: #aaa;
    }
  }
}

.page-nav {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 0;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    border-top: 1px solid $borderColor;
    padding-top: 1rem;
    overflow: auto; // clear float
  }

  .next {
    float: right;
  }
}

@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }

    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }
}
</style>