---
layout: project2
title: Graph Kernel Matching
permalink: /GraphKernel/
subtitle: Multi-level Correspondence via Graph Kernels for Editing Vector Graphics Designs
desc: Multi-level Correspondence via Graph Kernels for Editing Vector Graphics Designs
conference: Proceedings of the Graphics Interface Conference — GI 2021
image: /assets/img/GraphKernel.png
authors:
  - {
      name: "Valentina Shin",
      link: "https://hishin.github.io/",
      affl: "Adobe Research",
    }
  - { name: "Jeremy Warner", link: "/", affl: "UC Berkeley" }
  - {
      name: "Björn Hartmann",
      link: "https://people.eecs.berkeley.edu/~bjoern/",
      affl: "UC Berkeley",
    }
  - {
      name: "Celso Gomes",
      link: "https://research.adobe.com/person/celso-gomes/",
      affl: "Adobe Research",
    }
  - {
      name: "H. Winnemöller",
      link: "https://dl.acm.org/profile/81470653998",
      affl: "Adobe Research",
    }
  - {
      name: "Wilmot Li",
      link: "https://www.wilmotli.com/",
      affl: "Adobe Research",
    }
materials:
  - { name: "PDF", link: "/papers/GraphKernelVectorGraphics.pdf" }
  - { name: "Video", link: "https://www.youtube.com/watch?v=3LRnof9OpJc" }
  # - { name: 'ACM', link: https://dl.acm.org/doi/10.1145/3242587.3242591 }
  - {
      name: "Semantic Scholar",
      link: https://www.semanticscholar.org/paper/Multi-level-Correspondence-via-Graph-Kernels-for-Shin-Warner/194c2ddf71c01a9633ea70f529df07b4122a64dc,
    }
  - { name: "BibTex", link: "/bib/graphkernel.txt" }
---

To create graphic designs such as infographics, UI mockups, or
explanatory diagrams, designers often need to apply consistent edits
across similar groups of elements which is a tedious task to perform
manually. One solution is to explicitly specify the structure of the
design upfront and leverage it to transfer edits across elements that
share the predefined structure. However, defining such a structure
requires a lot of forethought which conflicts with the iterative work-
flow of designers. We propose a different approach where designers
select an arbitrary set of source elements, apply the desired edits,
and automatically transfer the edits to similarly structured target elements.
To this end, we present a graph kernel-based algorithm that
retroactively infers the shared structure and correspondence between
source and target elements. Our method does not require any explicit
annotation and can be applied to any existing design regardless of
how it was created. It is flexible enough to handle differences in
structure and appearance between source and target graphics, such
as cardinality, color, size, and arrangement. It also generalizes to
different types of edits such as style transfer or applying animation
effects. We evaluate our algorithm on a range of real-world designs
and demonstrate how our approach can facilitate various editing
scenarios.
