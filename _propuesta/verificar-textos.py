#!/usr/bin/env python3
"""Comprueba que la propuesta no cambie ningún texto del sitio.

Extrae de cada página publicada el texto visible y los atributos que se leen o se indexan
(alt, title, aria-label, placeholder y el content de <meta>), compara la versión de una
referencia de git (por defecto origin/main) con la copia de trabajo y muestra las diferencias.
Los espacios se normalizan: reindentar o partir líneas no cuenta como cambio.

Reglas que exige:
  - Ningún texto existente cambia, desaparece ni se mueve de orden.
  - No aparece texto nuevo. Las imágenes de Creta son decorativas: alt="" (vacío), que no cuenta.

Uso, desde la raíz del repo:
  python3 _propuesta/verificar-textos.py               # contra origin/main
  python3 _propuesta/verificar-textos.py <ref-de-git>  # contra otra referencia
Sale con 0 si no hay diferencias y con 1 si las hay.
"""
import difflib
import subprocess
import sys
from html.parser import HTMLParser

PAGINAS = ["index.html", "terminos.html", "cretacoins.html", "contacto.html", "404.html"]
ATRIBUTOS = ("alt", "title", "aria-label", "placeholder")
SIN_TEXTO = ("script", "style")


class Textos(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.lineas = []
        self.ignorar = 0

    def handle_starttag(self, tag, attrs):
        if tag in SIN_TEXTO:
            self.ignorar += 1
        a = dict(attrs)
        for nombre in ATRIBUTOS:
            if a.get(nombre):
                self.agregar(f"[{tag} {nombre}] {a[nombre]}")
        if tag == "meta" and a.get("content"):
            clave = a.get("name") or a.get("property") or a.get("http-equiv") or "?"
            self.agregar(f"[meta {clave}] {a['content']}")

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag in SIN_TEXTO:
            self.ignorar -= 1

    def handle_endtag(self, tag):
        if tag in SIN_TEXTO and self.ignorar:
            self.ignorar -= 1

    def handle_data(self, data):
        if not self.ignorar:
            self.agregar(data)

    def agregar(self, texto):
        texto = " ".join(texto.split())
        if texto:
            self.lineas.append(texto)


def textos(html):
    p = Textos()
    p.feed(html)
    p.close()
    return p.lineas


def main():
    ref = sys.argv[1] if len(sys.argv) > 1 else "origin/main"
    hay_cambios = False
    for pagina in PAGINAS:
        antes = subprocess.run(["git", "show", f"{ref}:{pagina}"], capture_output=True, text=True, check=True).stdout
        with open(pagina, encoding="utf-8") as f:
            despues = f.read()
        diff = list(difflib.unified_diff(textos(antes), textos(despues), f"{ref}:{pagina}", pagina, lineterm="", n=1))
        if diff:
            hay_cambios = True
            print("\n".join(diff))
        else:
            print(f"OK  {pagina}")
    if hay_cambios:
        print("\nHay textos distintos: la propuesta no debe cambiar ningún texto.")
    return 1 if hay_cambios else 0


if __name__ == "__main__":
    sys.exit(main())
