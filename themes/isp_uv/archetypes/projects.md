---
title: "{{ replace .Name "-" " " | title }}"   # Project title (Mandatory)
logo: ''                                       # Logo filename (e.g., 'project-logo.png') (Mandatory)
pi: ''                                         # Principal Investigator (PI) name(s) (Optional)
uvpi: ''                                       # University of Valencia Principal Investigator (UV-PI) name(s) (Optional)
years: ''                                      # Project duration (e.g., '2020-' or '2020-2023') (Optional)
website: ''                                    # Official project website URL (Mandatory)
funding_source: ''                             # Source of funding (e.g., 'EU Horizon 2020') (Optional)
role: ''                                       # Role of the University in the project (Optional)
project_type: ''                               # Type of project (e.g., 'Research Program', 'Collaboration') (Mandatory)
partners: []                                   # List of partner institutions (e.g., ['Institution 1', 'Institution 2']) (Optional)
weight: 0                                      # Weight for ordering projects (lower numbers appear first) (Optional)
---
