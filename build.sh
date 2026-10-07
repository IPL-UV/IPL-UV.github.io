#!/bin/bash

python3 scripts/bib_to_json.py
hugo --config hugo.toml --destination public/
hugo --config hugo_prometeo.toml --destination public/projects/prometeo/ --baseURL http://localhost:1313/projects/prometeo
hugo server --config hugo.toml --baseURL http://localhost:1313 --port 1313 --bind 0.0.0.0