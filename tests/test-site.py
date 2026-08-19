#!/usr/bin/env python3
"""Site QA checks — assets, i18n keys, live URLs."""
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE_URL = "https://ahmametovainur-ctrl.github.io/aynur-akhmametov"
errors = []
passed = 0


def ok(msg):
    global passed
    passed += 1
    print(f"  OK  {msg}")


def fail(msg):
    errors.append(msg)
    print(f"  FAIL {msg}")


def check_file(path: Path, label=None):
    if path.is_file():
        ok(label or str(path.relative_to(ROOT)))
    else:
        fail(f"Missing file: {path.relative_to(ROOT)}")


def extract_assets(html: str):
    return re.findall(r'(?:src|href)="([^"]+)"', html)


def extract_i18n_keys(html: str):
    return set(re.findall(r'data-i18n="([^"]+)"', html))


def load_i18n_keys(js: str):
    keys = set(re.findall(r"'([^']+)':", js))
    return keys


def http_status(url: str):
    try:
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status
    except urllib.error.HTTPError as e:
        return e.code
    except Exception as e:
        return str(e)


print("=== Local file checks ===")
check_file(ROOT / "index.html")
check_file(ROOT / "js/main.js")
check_file(ROOT / "videos/showreel.mp4")
for icon in [
    "adobeaftereffects.svg", "adobepremierepro.svg", "adobephotoshop.svg",
    "adobeillustrator.svg", "figma.svg", "cinema4d.svg", "comfyui.svg",
    "favicon.svg", "qr-telegram.png", "qr-showreel.png",
]:
    check_file(ROOT / "icons" / icon)

html = (ROOT / "index.html").read_text(encoding="utf-8")
js = (ROOT / "js/main.js").read_text(encoding="utf-8")

print("\n=== Asset reference checks ===")
for asset in extract_assets(html):
    if asset.startswith(("http", "#", "mailto:", "https:")):
        continue
    if asset.startswith("javascript:"):
        continue
    check_file(ROOT / asset.split("?")[0], asset)

print("\n=== i18n key checks ===")
html_keys = extract_i18n_keys(html)
js_text = js
# crude: keys used in data-i18n must exist in both ru and en blocks
for key in sorted(html_keys):
    if f"'{key}':" in js_text:
        ok(f"i18n key: {key}")
    else:
        fail(f"Missing i18n key in main.js: {key}")

required_ids = ["showreel", "showreel-video", "work-yandex", "work-envato", "lang-ru", "lang-en"]
print("\n=== Required DOM ids ===")
for el_id in required_ids:
    if f'id="{el_id}"' in html or f"id='{el_id}'" in html:
        ok(f"#{el_id}")
    else:
        fail(f"Missing id: {el_id}")

print("\n=== Work links ===")
if html.count('class="work-link"') == 2 and html.count('class="case-card"') == 0:
    ok("2 work links (no case cards)")
else:
    fail("expected 2 work links without case cards")

if 'id="work-yandex"' in html and "Em9lTJpf1cYpPQ" in html:
    ok("yandex work link")
else:
    fail("yandex work link missing")

if 'id="work-envato"' in html and "JustaMotion" in html:
    ok("envato work link")
else:
    fail("envato work link missing")

if 'openWorkModal' not in js:
    ok("no work modal JS")
else:
    fail("work modal JS still present")

if html.count('data-copy="@tandyy9"') >= 2:
    ok("telegram copy buttons")
else:
    fail("Expected 2+ telegram copy buttons")

print("\n=== Scroll snap ===")
if re.search(r"scroll-snap", html):
    fail("scroll-snap still present in HTML (causes footer bounce)")
else:
    ok("scroll-snap fully disabled")

print("\n=== Live site checks ===")
for path in ["", "/js/main.js", "/icons/figma.svg", "/icons/qr-telegram.png", "/videos/showreel.mp4", "/icons/favicon.svg", "/folder.html"]:
    url = BASE_URL + path
    status = http_status(url)
    if status == 200:
        ok(f"{url} → {status}")
    else:
        fail(f"{url} → {status}")

live_html = urllib.request.urlopen(BASE_URL + "/", timeout=20).read().decode("utf-8", errors="replace")
if re.search(r"placeholder для|placeholder for|client testimonial placeholder", live_html, re.I):
    fail("Live site still contains placeholder copy")
else:
    ok("No placeholder copy on live site")

print(f"\n=== Summary: {passed} passed, {len(errors)} failed ===")
if errors:
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print("All tests passed.")
