require 'rake'
require 'jekyll'

task :default => ["help"]
task :help do
  system "rake -T"
end

task :serve => ["start"]

desc "start and open the server"
task :start do
  puts "Starting server at http://localhost:4000"
  system "jekyll serve --open-url --livereload --trace"
end

desc "lint setup"
task :lint_setup do
  system "brew install pipx"
  system "pipx install mdformat"
  system "pipx inject mdformat mdformat-gfm mdformat-frontmatter mdformat-footnote mdformat-gfm-alerts"
end

desc "lint markdown, css, html, and js files"
task :lint do
  system "npx prettier . --write" 
  system "mdformat ." # markdown
end
