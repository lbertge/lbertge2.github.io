# Blog setup

[[toc]]

Shit, this website way took too long and was unequivocally frustrating to set-up. But as with any experience, I think the process has taught me a lot about what I expect of myself when writing down my thoughts and how to present them. 

As of this post's inception, I plan to write chronologically, because I think it best explains how I arrived at the current state of the blog. I may change this, depending on how concisely I can write about my experiences.

## Hugo

Among other reasons to start writing, I looked up to my friend [Justin's blog](https://www.jkleong.com) as reference point. Justin had originally used Jekyll to help scaffold his website, then switched over to Hugo. He seemed pretty happy with it, noting a speedup in site building. So I too looked into Hugo. However, I have dignity and didn't want my website to appear an exact copy, so I set off looking for a theme I liked. 

Amusingly, that logic extended into theming that well. There were themes that stood out to me, but I remained mostly unhappy that I wasn't able to get the theme to show _exactly_ as I liked. I didn't know CSS very well - enough to poke around and figure out gets toggled, but not enough to feel confident about refactoring entire layouts. So I was hung up on the details, and never really focused on the content itself.

Another important bit is that I wanted the flexibility to include JS in my posts. Around the time I started this endeavor I was learning about [VueJS](https://www.vuejs.org). I wanted to take advantage of a modern JS ecosystem such as Vue, with its component-focused design, in combination with Webpack, single-file components. So naturally I hated the idea of including dirty `<script>` tags, importing Vue libaries from CDNs, and the like in my pretty Markdown file.

In retrospect I think Hugo still would have suited most of my blogging needs. But hey, I figure this stuff is new to me and I am capable of learning, so we should just try to go down this rabbit hole and see what happens.

## Vue blog demo

My desire to learn more about web design led me to search for existing work done with VueJS. I found [one such example](https://snipcart.com/blog/vuejs-blog-demo), created by Snipcart, that I thought really appealed to my aesthetics. The blog's theme felt clean, and the staggered animations of each rendered post was dynamic and responsive. It was striking because of these contrasting ideas, and so I set to to work modifying it to my taste.

For this project, my primary challenge was how to make small tweaks without breaking the remainder of the site's functionality. Each component, as it turns out, depends delicately on a coupled framework of Vue, SCSS, and HTML, and often was the case that multiple warnings would suddenly appear in the console. I'd like to think I perservered through that; I believed it was mostly due to lack of experience, though  my frustrations kept my progress at bay.

This drew me to a fundamental question: to what end was I working towards? When the site didn't perform as I expected, I felt a nagging desire to figure out why; after all, this would be my own site, and I'd feel stupid if I didn't know my own project worked. On the other hand, I could just working and working on the theme, and the site would probably never get published with any actual content.

I'm sure many would agree that at this point taking a middle-ground would be a good resolution, and that's exactly what I vaguely did. Everyone has a different definition of where this middle-ground is, and I don't really have anything to say about that, since I don't know where my own middle-ground is either. Nevertheless, it seems to be the case that I have to ask myself these meta-related questions to get myself out of this overthinking rut.

One such overarching design of the website. As Snipcart writes in their post, an intentional feature was to adapt data to the application, rather than the converse.