# 🎬 Drehbuch-Generator

**Storyline → fertiges Drehbuch** — direkt im Browser, powered by Claude.

Eingabe: Storyline + Figuren mit Charakterisierung + Stilvorlage (Serien-Vorbild, Dialogprobe oder Tonalität).
Ausgabe: Vollständiges, formatiertes Drehbuch — live gestreamt, Export als `.txt` oder `.fountain`.

---

## Live-Demo

→ **[patrickfischerksa.github.io/drehbuch-generator](https://patrickfischerksa.github.io/drehbuch-generator)**

---

## Schnellstart

### 1 · Anthropic API Key besorgen

1. Gehe auf **[console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)**
2. Account erstellen (oder einloggen)
3. Klicke **Create Key** → Key kopieren (`sk-ant-…`)
4. Den Key im Tool oben rechts einfügen

> Der Key wird nur im `sessionStorage` des Browsers gespeichert (verschwindet beim Tab-Schliessen) und niemals an Dritte übertragen.

### 2 · Kosten (Anthropic Pay-as-you-go)

| Modell | Input | Output | Typische Kosten / Drehbuch |
|---|---|---|---|
| Claude Haiku 4.5 | $0.80 / 1M Token | $4 / 1M Token | ~$0.01–0.03 |
| Claude Sonnet 4.5 | $3 / 1M Token | $15 / 1M Token | ~$0.05–0.15 |
| Claude Opus 4.5 | $15 / 1M Token | $75 / 1M Token | ~$0.25–0.80 |

Für den Schulbetrieb empfiehlt sich **Sonnet 4.5** (Qualität/Preis-Verhältnis).

---

## GitHub Pages einrichten (einmalig)

```bash
# 1 · Repo auf GitHub erstellen
#     Name: drehbuch-generator   (→ ergibt URL: dein-name.github.io/drehbuch-generator)

# 2 · Diesen Ordner hochladen / pushen
git init
git remote add origin https://github.com/DEIN-USERNAME/drehbuch-generator.git
git add .
git commit -m "Initial commit: Drehbuch-Generator"
git branch -M main
git push -u origin main

# 3 · GitHub Pages aktivieren
#     Settings → Pages → Source: "Deploy from branch" → main → / (root) → Save
#     Nach ~60 Sekunden ist die Seite live.
```

---

## Funktionen

| Feature | Detail |
|---|---|
| **Stilvorlage** | Serien-Vorbild (Name genügt), eigene Dialogprobe, oder Tonalität-Auswahl |
| **Figuren** | Beliebig viele — mit Erscheinung, Psyche/Wunde, Sprechweise, Motivation |
| **Storyline** | Szenen-Karten oder Freitext |
| **Optionen** | Szenenlänge · Sprache (Hochdeutsch / Schweizerdeutsch / Österreichisch) · Regieanweisungen · Modell |
| **Streaming** | Drehbuch erscheint live beim Schreiben — kein Warten |
| **Export** | `.txt` (universal) · `.fountain` (Final Draft, Fade In, WriterDuet …) |

---

## Fountain-Format

Der `.fountain`-Export ist kompatibel mit:
- **Final Draft** (FDX-Import aus Fountain)
- **Fade In**
- **WriterDuet**
- **Highland 2**
- **Arc Studio**

---

## Lokale Nutzung (ohne Server)

Die App ist eine einzelne HTML-Datei — einfach `index.html` im Browser öffnen.
Kein Build-Prozess, keine Dependencies, kein Server nötig.

---

## Lizenz

MIT — frei verwendbar, auch im Schulbetrieb.
