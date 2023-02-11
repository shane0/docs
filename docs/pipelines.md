# pipelines

- I got an email about one of my pipelines failing
- it's a domain I decided not to renew: eatthe.bar
- the price went up 10x lol
- figured I'd save it here to see how I feel about using docusaurus

## todo cli pipeline

- I use a command line task manager called todo cli
- this was a sceduled task that crudely converted the todo text files to html
- I only built this because I was experimenting with pipelines at the time
- I don't really use it, but I'm doing a js bootcamp
- so maybe later on the node course I'll revisit this
- it might be simple to have react render a todocli feature or component

```yml
todocli:
  stage: build
  tags: 
    - mindfull
  only:
    - schedules
  script:
    # display doing from todo.cli 
    - cd todocli
    - cat mdl1.html > doing.html 
    - ./todo.sh listpri a >> doing.html 
    - cat mdl2.html >> doing.html 
    - docker cp doing.html homelink-wordpress-1:/var/www/html/
```

## pandoc & reveal slideshows

- this one built html slideshows from markdown files
- this is also something I might reuse later
- and I could add other types of documents like mermaid diagrams or markmap trees

```yml
basics:
  stage: build
  tags:
    - mindfull
  except:
    - schedules
  script:
    - cd reveal-zen
    - pwd
    - pandoc -t revealjs -s -o basics.html basics.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=sky
    # - pandoc -t revealjs -s -o zen.html zen.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=moon
    # - pandoc -t revealjs -s -o wotb.html wotb.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=blood
    # - pandoc -t revealjs -s -o urgyen.html urgyen.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=night
    # - pandoc -t revealjs -s -o thich.html thich.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=beige
    # - pandoc -t revealjs -s -o jargon.html jargon.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=simple
    # - pandoc -t revealjs -s -o favorites.html favorites.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=serif
    # - pandoc -t revealjs -s -o death.html death.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=serif
    # - pandoc -t revealjs -s -o centering.html centering.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=serif
    # - pandoc -t revealjs -s -o fiveagg.html fiveagg.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=serif
    # - pandoc -t revealjs -s -o fiverem.html fiverem.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=serif
      #- pandoc -t revealjs -s -o urgyen.html urgyen.md -V revealjs-url=https://unpkg.com/reveal.js@3.9.2/ -V theme=simple
      #- pandoc -t revealjs -s -o basics.html basics.md -V revealjs-url=https://unpkg.com/browse/reveal.js@4.2.1/ -V theme=solarized - ls
    - docker cp basics.html homelink-wordpress-1:/var/www/html/
```
