---
title: "Try"
---

<h1>Full URL Example</h1>
<p>Using <code>window.location.href</code>: <span id="fullUrl"></span></p>
<p>Using <code>window.location.origin + window.location.pathname</code>: <span id="originPath"></span><p>
<script>
    // Usando window.location.href para obtener la URL completa
    const fullUrl = window.location.href;
    document.getElementById('fullUrl').textContent = fullUrl;
    // Usando window.location.origin y window.location.pathname para construir la URL desde la raíz
    const originPath = window.location.origin + window.location.pathname;
    document.getElementById('originPath').textContent = originPath;
</script>