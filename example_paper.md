---
layout: paper
title: Vector Style Transfer
permalink: /vst/
subtitle: Interactive Flexible Style Transfer for Vector Graphics
conference: ACM Symposium on User Interface Software and Technology — UIST 2023
image: /assets/img/VST_teaser.jpg
authors:
  - { name: "Jeremy Warner", link: "/", affl: "UC Berkeley" }
  - {
      name: "Kyu Won Kim",
      link: "https://www.linkedin.com/in/kwk/",
      affl: "UC Berkeley",
    }
  - {
      name: "Björn Hartmann",
      link: "https://people.eecs.berkeley.edu/~bjoern/",
      affl: "UC Berkeley",
    }
materials:
  - { name: "PDF", link: "/assets/pdf/VST-UIST-2023.pdf" }
  - {
      name: "Talk",
      link: "https://www.youtube.com/watch?v=I4s6q2RYQjI&t=6510s",
    }
  - { name: "Video", link: "https://youtu.be/b4IyfDdWp_E" }
  - { name: "Code", link: "https://github.com/BerkeleyHCI/vst" }
  - { name: "Demo", link: "https://berkeleyhci.github.io/vst" }
  - { name: "ACM", link: https://dl.acm.org/doi/10.1145/3586183.3606751 }
---

Vector graphics are an industry-standard way to represent and share visual designs. Designers frequently source and incorporate styles from existing designs into their own work. Unfortunately, popular design tools aren't well suited for this task. We present VST, Vector Style Transfer, a novel design tool for flexibly transferring visual styles between vector graphics. The core of VST lies in leveraging automation while respecting designers' tastes and the subjectivity inherent to style transfer. In VST, designers tune a cross-design element correspondence and customize which style attributes to change. We report results from a user study in which designers used VST to control style transfer between several designs, including designs participants created with external tools beforehand. VST shows that enabling design correspondence tuning and customization is one way to support interactive, flexible style transfer. We also find that someone using VST can significantly reduce the time and work for style transfer compared to experienced designers using industry-standard tools.
