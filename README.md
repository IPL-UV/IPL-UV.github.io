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
- `hugo server` to deploy locally 


Jump to how to sections: 

- [Single pages](#single-pages)
- [People](#people)

----

### Single pages 

To add a page with content add a file (`.html` or `.md`) in the `content` folder (better in some subfolder). 

You can style your page as you wish with html (you always can use the style definition in `statisc/style/style.css`). 

The top menu will be added automatically so you do not have to take care of that, just write the main content of your page. 

Resources (e.g. pdf files or images) can be placed alongside your page and can be accessed with relative paths, in this case is better to 
create the following folder structure for your page:

```
content/
|--- subfolder/
|    |___ mynewpage/
|         |___ _index.html or _index.md    <-  your new page goes here
|         |___ img/
|              |___ myimage.png  <- place images here you can reference them with img/myimage.png from _index
|         |___ pdf/ 
               |___ mypaper.pdf <- similarly for pdf and other files 
```

For an example check `content/research/` pages. 

### People

Each person in the people page is associated with a `.md` file in the `content/people` folder (or a subfolder). 
The information to generate personal links and the name of the image is defined in the front matter of the `.md` file. 
The (short) bio is stored in the main file content (the part after the front matter). 

There is a hugo archetype to add easily people, for that you need hugo installed (otherwise copy the front matter from another person file).``

```
hugo new content people/visitorname.md
```
the above command will generate an empty file in `content/people/visitorname.md`, edit it with the informationa, in particular:

- in `title` place the name
- in `role` write the role (e.g `full professors`, `associate professors`, `postdocs`, `phd students`, `visitors`, `alumni` **lowercase and plural**! ) 
- check the `params` and modify accordingly, remove fields that you do not want 
- add the corresponding image in the `assets/images/people` folder
