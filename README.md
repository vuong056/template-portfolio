## template portfolio website [[live demo](https://jeremywrnr.com/template-portfolio/)]

This is a cleaned up version of the code I use for [my personal site](https://jeremywrnr.com/).

[![MIT](https://img.shields.io/npm/l/alt.svg?style=flat)](http://jeremywrnr.com/mit-license)

#### Setup (for local dev/editing):

```
gem install rake
gem install jekyll
rake start
```

Then, go to (if not opened automatically): http://127.0.0.1:4000/template-portfolio/

#### Overview:

This should be mostly setup for hosting on GitHub pages, though there are few things to note as needing to be changed to ensure all relative links are working.
One is the `baseurl` field in the site's [`config.yml`](./config.yml) - if hosting as the default GitHub pages instance, you can simplify things, as the `/` root will point to your index.
Otherwise, adjusting this as needed (e.g., changing it from /template-portfolio) should work.
You can also update your name and email address which is used in setting the site's pages' author field (`{{ site.author.name }}`).

The [`_data`] folder has information used to render parts of the index and projects page.
Update these files with your own experience/research/projects as needed.
The [`assets`] folder has images/css/pdf files you want your portfolio to host.

```
.
├── _config.yml
├── _data
│   ├── experiences.yaml 
│   ├── papers.yaml
│   └── projects.yaml
├── _layouts
│   ├── default.html
│   ├── index.html
│   ├── page.html
│   ├── paper.html
│   ├── project.html
│   └── redirect.html
├── 404.md
├── assets
│   ├── css
│   │   ├── main.css
│   │   └── project.css
│   ├── img
│   │   └── image.jpg
│   └── pdf
│       └── example.pdf
├── CNAME
├── example_paper.md
├── example_project.md
├── example_redirect.md
├── index.md
├── LICENSE
├── projects.md
├── Rakefile
└── README.md
```



#### Examples

index/homepage: https://jeremywrnr.com/template-portfolio/

<img width="1308" alt="example_index" src="https://github.com/user-attachments/assets/aa4ffc61-9212-490b-a382-0877317f9520" />

example paper: https://jeremywrnr.com/template-portfolio/vst/

<img width="1308" alt="example_paper" src="https://github.com/user-attachments/assets/d26e28aa-1fc9-49fa-9306-a64a6a1e1187" />

example project overview: https://jeremywrnr.com/template-portfolio/projects/

<img width="1308" alt="example_projects" src="https://github.com/user-attachments/assets/21ae4d27-290e-4a7a-9747-eb2b16535373" />

example project: https://jeremywrnr.com/template-portfolio/example_project/

<img width="1308" alt="example_project" src="https://github.com/user-attachments/assets/a97aedd2-4a87-4554-8962-56d83c82fcbf" />

#### Deployment (via GitHub pages):

<img width="801" alt="deploy" src="https://github.com/user-attachments/assets/86a3053d-fbdf-4913-9903-bb124225fa89" />
