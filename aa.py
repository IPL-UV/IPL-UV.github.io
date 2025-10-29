import os
import re
from pathlib import Path
from PIL import Image

def extract_front_matter(content):
    """Extrae el front matter YAML de un archivo markdown"""
    pattern = r'^---\s*\n(.*?)\n---'
    match = re.match(pattern, content, re.DOTALL)
    if match:
        return match.group(1)
    return None

def extract_img_param(front_matter):
    """Extrae el valor del parámetro img de params"""
    if not front_matter:
        return None
    
    pattern = r'params:\s*\n\s+img:\s*([^\n]+)'
    match = re.search(pattern, front_matter)
    if match:
        img_value = match.group(1).strip()
        img_value = img_value.strip('"\'')
        return img_value
    return None

def get_image_extension(img_path):
    """Obtiene la extensión de una imagen"""
    if not img_path:
        return None
    return Path(img_path).suffix.lower()

def convert_to_webp(image_path):
    """Convierte una imagen a formato WebP"""
    try:
        # Abrir la imagen
        img = Image.open(image_path)
        
        # Crear el nuevo nombre con extensión .webp
        webp_path = image_path.rsplit('.', 1)[0] + '.webp'
        
        # Convertir a RGB si es necesario (para imágenes con transparencia)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Mantener transparencia para WebP
            img.save(webp_path, 'WEBP', quality=90, lossless=False)
        else:
            img.save(webp_path, 'WEBP', quality=90)
        
        print(f"  ✓ Convertida: {os.path.basename(image_path)} -> {os.path.basename(webp_path)}")
        return webp_path
    
    except Exception as e:
        print(f"  ✗ Error convirtiendo {image_path}: {e}")
        return None

def update_md_file(md_path, old_img_name, new_img_name):
    """Actualiza el archivo .md con el nuevo nombre de imagen"""
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Reemplazar el nombre de la imagen en el parámetro img
        # Escapar caracteres especiales en el nombre del archivo
        old_escaped = re.escape(old_img_name)
        pattern = f'(img:\s*)({old_escaped})'
        
        new_content = re.sub(pattern, f'\\1{new_img_name}', content)
        
        # Guardar el archivo actualizado
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"  ✓ Actualizado MD: {md_path}")
        return True
    
    except Exception as e:
        print(f"  ✗ Error actualizando {md_path}: {e}")
        return False

def find_non_webp_images(root_path):
    """Encuentra todos los .md con imágenes que no sean .webp"""
    results = []
    
    for root, dirs, files in os.walk(root_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    front_matter = extract_front_matter(content)
                    
                    if front_matter:
                        img_param = extract_img_param(front_matter)
                        
                        if img_param:
                            extension = get_image_extension(img_param)
                            
                            if extension and extension != '.webp':
                                results.append({
                                    'path': file_path,
                                    'img': img_param,
                                    'extension': extension
                                })
                
                except Exception as e:
                    print(f"Error procesando {file_path}: {e}")
    
    return results

def main():
    # Rutas
    md_root_path = '/home/contreras/Documents/GitHub/IPL-UV.github.io/content/people'
    images_root_path = '/home/contreras/Documents/GitHub/IPL-UV.github.io/static/images/people'
    
    print("=" * 70)
    print("BUSCANDO ARCHIVOS .MD CON IMÁGENES NO-WEBP...")
    print("=" * 70)
    print()
    
    non_webp_files = find_non_webp_images(md_root_path)
    
    if not non_webp_files:
        print("✓ No se encontraron archivos .md con imágenes diferentes a .webp")
        return
    
    print(f"Encontrados {len(non_webp_files)} archivos con imágenes que NO son .webp\n")
    
    # Mostrar archivos encontrados
    for idx, item in enumerate(non_webp_files, 1):
        print(f"{idx}. {item['img']} ({item['extension']})")
    
    print()
    print("=" * 70)
    print("CONVIRTIENDO IMÁGENES A WEBP Y ACTUALIZANDO ARCHIVOS .MD...")
    print("=" * 70)
    print()
    
    converted_count = 0
    updated_count = 0
    
    for item in non_webp_files:
        img_name = item['img']
        md_path = item['path']
        
        print(f"Procesando: {img_name}")
        
        # Construir la ruta completa de la imagen
        img_full_path = os.path.join(images_root_path, img_name)
        
        # Verificar si la imagen existe
        if not os.path.exists(img_full_path):
            print(f"  ⚠ Advertencia: Imagen no encontrada en {img_full_path}")
            print()
            continue
        
        # Convertir a WebP
        webp_path = convert_to_webp(img_full_path)
        
        if webp_path:
            converted_count += 1
            
            # Obtener el nuevo nombre de la imagen (solo el nombre del archivo)
            new_img_name = os.path.basename(webp_path)
            
            # Actualizar el archivo .md
            if update_md_file(md_path, img_name, new_img_name):
                updated_count += 1
        
        print()
    
    print("=" * 70)
    print("RESUMEN")
    print("=" * 70)
    print(f"Imágenes convertidas: {converted_count}/{len(non_webp_files)}")
    print(f"Archivos .md actualizados: {updated_count}/{len(non_webp_files)}")
    print()

if __name__ == "__main__":
    main()
    
