---
title: "{{ replace .Name "-" " " | title }}"  # News title, automatically generated based on the file name (Mandatory)
date: "{{ now.Format "2006-01-02" }}"        # Automatically generated current date in format YYYY-MM-DD (Mandatory)
link: ""                                     # Link to the full news article (Optional)
img: ""                                      # Image file name or URL (Mandatory)
---

Add the news content here