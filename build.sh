#!/bin/bash

# Construir el sitio principal en public/
hugo --config hugo.toml --destination public/

# Construir el sitio secundario en public/projects/prometeo/
hugo --config hugo_new.toml --destination public/projects/prometeo/

# Servir el sitio principal en localhost:1313
hugo server --config hugo.toml
