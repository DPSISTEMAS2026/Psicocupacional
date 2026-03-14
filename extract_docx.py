import zipfile
import xml.etree.ElementTree as ET
import os

def get_docx_text(path):
    """
    Extracts text from a .docx file by reading word/document.xml
    """
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
        
        tree = ET.fromstring(xml_content)
        namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for p in tree.findall('.//w:p', namespace):
            texts = [t.text for i, t in enumerate(p.findall('.//w:t', namespace)) if t.text]
            if texts:
                paragraphs.append(''.join(texts))
        
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error: {str(e)}"

docx_path = r"d:\PSICOCUPACIONAL\Proyecto institucional - Corporación Psicocupacional.docx"
text = get_docx_text(docx_path)
with open(r"d:\PSICOCUPACIONAL\proyecto.txt", "w", encoding="utf-8") as f:
    f.write(text)
print("Done")
