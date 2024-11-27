---
title: "ppt"
url: "/ppt/"
aliases: ["/ppt/"]
---
<!DOCTYPE html>
<html>
<head>
    <title>Redirecting...</title>
    <script>
        // Base de redirección (Hugging Face o cualquier servidor)
        const newBaseUrl = "https://huggingface.co/datasets/isp-uv-es/Web_site_legacy/resolve/main/courses/ppt";

        // Obtener la ruta actual
        const currentPath = window.location.pathname;

        // Verifica si la ruta contiene "/ppt/"
        if (currentPath.startsWith("/ppt/")) {
            // Extrae todo lo que venga después de "/ppt/"
            const subPath = currentPath.replace("/ppt/", "");

            // Construye la nueva URL de redirección
            const redirectUrl = newBaseUrl + "/" + subPath;

            // Redirige a la nueva URL
            window.location.href = redirectUrl;
        } else {
            // Si no está en "/ppt/", mostrar un mensaje 404
            document.write("<h1>Page Not Found</h1>");
        }
    </script>
</head>
<body>
    <p>Redirecting...</p>
</body>
</html>
