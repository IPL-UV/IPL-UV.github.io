---
title: "{{ replace .Name "-" " " | title }}"  # Seminar title, automatically generated based on the file name (Mandatory)
date: "{{ now.Format "2006-01-02" }}"         # Automatically generated current date in format YYYY-MM-DD (Mandatory)
speaker: ""                                   # Speaker name (Mandatory)
affiliation: ""                               # Speaker's affiliation (Optional)
link: ""                                      # Link to seminar materials or external resource (Optional)
img: ""                                       # Image file name or URL (Optional)
---
