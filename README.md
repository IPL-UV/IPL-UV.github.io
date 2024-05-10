## ISP website

for all changes to the website 

1. `git clone https://github.com/IPL-UV/IPL-UV.github.io` (or better fork it in your account and clone it) 
2. create a new branch `git switch -c mybranchname`  where `mybranchname` is an informative name (e.g. `addingvisitorjose`)
3. make your changes (as explained in the following sections) 
4. `git add` and `git commit`
5. `git push` and create pull request 
6. wait for approval and merging 

additioanlly to test locally and use hugo archetypes:

- [install hugo](https://gohugo.io/installation/)
- `hugo sever` to deploy locally 

### People

#### Add yourself

There is a hugo archetype to add easily people

```
hugo new content people/visitorname.md
```
the above command will generate an empty file in `content/people/visitorname.md`, edit it with the informationa, in particular:

- in `title` place the name
- in `role` write the role (e.g `full professor`, `associate professor`, `postdoc`, etc.. lowercase!!) 
- check the `params` and modify accordingly
- add the corresponding image in the `assets/images/people` folder
