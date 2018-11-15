<template lang="pug">
  div
    div.ui.divided.items(v-for="item in items")
      div.item
        div.content
          a.header {{ item.title }}
          div.meta
            span {{ item.authors }}
          div.description
            p {{ item.abstract }}
          div.extra
            div.ui.info.tiny.icon.button
              i.plus.icon
            div.ui.primary.tiny.button Add to Library
              i.right.book.icon
</template>

<script>
export default {
  name: 'SearchResults',
  data() {
    return {
      items: [
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        },
        {
          title: 'SDSS-IV MaNGA: pattern speeds of barred galaxies',
          authors: 'Guo, Rui; Mao, Shude; Athanassoula, E.; Li, Hongyu',
          abstract: `We study a novel interacting dark energy - dark
          matter scenario where the anisotropic stress of the large-scale
          inhomogeneities is considered...`
        }
      ]
    }
  }
}
</script>
