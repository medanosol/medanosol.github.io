---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Home

hero:
  name: "@medanosol"
  text: "Building better websites!"
  tagline: "Our collection of open source projects and tools that are used to build better websites."

features:
  - title: translation-tool
    icon: 🌐
    details: A tool that allows you to translate your i18n files in a simple and fast way.
    link: /translation-tool
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/dd8888.png',
    name: 'David Díaz',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/dd8888' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/david-diaz-dev/' },
    ]
  },
  {
    avatar: 'https://github.com/VincentGillot.png',
    name: 'Vincent Gillot',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/VincentGillot' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/vincentgillot/' },
    ]
  },
  {
    avatar: 'https://www.github.com/raulrodrigueztorres.png',
    name: 'Raúl Rodríguez',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/raulrodrigueztorres' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/raulrt/' },
    ]
  },
  
]
</script>

<div style="padding: 24px 48px;">
  <h2 style="font-size: 32px; font-weight: 700; text-align: center; width: 100%; margin: 24px 0px;">Meet our team!</h2>
  <VPTeamMembers size="medium" :members="members" />
</div>
