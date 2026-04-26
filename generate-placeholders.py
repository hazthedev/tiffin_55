from PIL import Image, ImageDraw, ImageFont
import os

# Color palette from the design system
CHARCOAL = (26, 23, 21)
COAL_BROWN = (42, 35, 32)
COPPER = (197, 100, 45)
CREAM = (237, 228, 211)
CONCRETE = (92, 86, 80)

def draw_placeholder(path, width, height, label, sublabel=""):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    
    img = Image.new("RGB", (width, height), COAL_BROWN)
    draw = ImageDraw.Draw(img)
    
    # Draw a subtle border
    draw.rectangle([2, 2, width-3, height-3], outline=CONCRETE, width=1)
    
    # Draw a centered copper rectangle as a visual accent
    rect_w = min(width // 3, 120)
    rect_h = min(height // 4, 80)
    rect_x = (width - rect_w) // 2
    rect_y = (height - rect_h) // 2 - 20
    draw.rectangle([rect_x, rect_y, rect_x + rect_w, rect_y + rect_h], fill=COPPER)
    
    # Try to use a font, fallback to default
    try:
        font = ImageFont.truetype("arial.ttf", 18)
        small_font = ImageFont.truetype("arial.ttf", 12)
    except:
        font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # Draw label
    bbox = draw.textbbox((0, 0), label, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    draw.text(((width - text_w) // 2, rect_y + rect_h + 20), label, fill=CREAM, font=font)
    
    if sublabel:
        sbbox = draw.textbbox((0, 0), sublabel, font=small_font)
        stext_w = sbbox[2] - sbbox[0]
        draw.text(((width - stext_w) // 2, rect_y + rect_h + 45), sublabel, fill=CONCRETE, font=small_font)
    
    img.save(path, "JPEG", quality=85)
    print(f"Created: {path}")

# Tiffin images
draw_placeholder("public/images/tiffin/tiffin-hero.jpg", 1200, 800, "Tiffin 55", "Mangkuk Tingkat Hero")
draw_placeholder("public/images/tiffin/tiffin-stacked.jpg", 600, 750, "Stacked", "3 tiers")
draw_placeholder("public/images/tiffin/tiffin-unstacking.jpg", 600, 750, "Unstacking", "Open the carriers")
draw_placeholder("public/images/tiffin/tiffin-served.jpg", 600, 750, "Served", "Ready to eat")

# Food images
food_items = [
    ("tiffin-set.jpg", "Tiffin Set Kampung"),
    ("ayam-berempah.jpg", "Ayam Berempah"),
    ("daging-merah.jpg", "Daging Masak Merah"),
    ("tempe.jpg", "Sambal Goreng Tempe"),
    ("paru.jpg", "Paru Goreng"),
    ("sotong-petai.jpg", "Sotong Sambal Petai"),
    ("ayam-merah.jpg", "Ayam Masak Merah"),
    ("aglio-olio.jpg", "Aglio Olio"),
    ("carbonara.jpg", "Carbonara"),
    ("lamb-chop.jpg", "Lamb Chop"),
    ("steak.jpg", "Grilled Steak"),
    ("roti-bakar.jpg", "Roti Bakar"),
    ("roti-cheese.jpg", "Roti Cheese"),
    ("pancake-tembam.jpg", "Pancake Tembam"),
    ("pancake-berry.jpg", "Berry Pancake"),
    ("caramel-latte.jpg", "Caramel Latte"),
    ("kopi-tarik.jpg", "Kopi Tarik"),
    ("teh-tarik.jpg", "Teh Tarik"),
    ("milo-dinosaur.jpg", "Milo Dinosaur"),
]

for filename, label in food_items:
    draw_placeholder(f"public/images/food/{filename}", 600, 450, label, "Placeholder")

# Interior / vibe images
interior_items = [
    ("space-1.jpg", "Industrial Interior", 600, 600),
    ("space-2.jpg", "Edison Bulbs", 600, 600),
    ("space-3.jpg", "Late Night Crowd", 600, 600),
    ("space-4.jpg", "Tiffin Service", 600, 600),
    ("vibe-1.jpg", "Interior Wide", 800, 800),
    ("vibe-2.jpg", "Coffee Close-up", 400, 400),
    ("vibe-3.jpg", "Warm Lighting", 400, 400),
    ("vibe-4.jpg", "Tiffin Top View", 400, 400),
    ("vibe-5.jpg", "Lepak Vibe", 400, 400),
]

for filename, label, w, h in interior_items:
    draw_placeholder(f"public/images/interior/{filename}", w, h, label, "Placeholder")

# OG image
os.makedirs("public", exist_ok=True)
draw_placeholder("public/og-image.jpg", 1200, 630, "Tiffin 55", "Late-Night Malay Cafe")

# Favicon SVG
with open("public/favicon.svg", "w") as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="12" fill="#1A1715"/>
  <rect x="20" y="30" width="60" height="8" rx="2" fill="#C5642D"/>
  <rect x="20" y="44" width="60" height="8" rx="2" fill="#C5642D" opacity="0.8"/>
  <rect x="20" y="58" width="60" height="8" rx="2" fill="#C5642D" opacity="0.6"/>
</svg>''')

print("\nAll placeholders generated successfully!")
