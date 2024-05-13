---
date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
params:
  img: 'unknown.png'
  website: ''
---
