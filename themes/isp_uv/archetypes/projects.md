---
date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
params:
  short: '{{ replace .File.ContentBaseName `-` ` ` }}'
  logo: 'unknown.png'
  pi: ''
  uvpi: ''
  years: '1950-1950'
  founding: 
    name : ''
    logo: 'unknown.png'
  website: ''
  partners: 
   - '' 
  active: true 
---
