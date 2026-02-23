# Chinese Pinyin Practice App (中文生字词语拼音练习)

A web-based tool for practicing Chinese Pinyin for both single characters and multi-character words.

## Features

- **Practice Mode**:
  - Displays Chinese characters or words.
  - User inputs Pinyin (supports tone marks `nǐ hǎo` or numbers `ni3 hao3`).
  - Immediate feedback on correctness.
  - Distinguishes between correct tone and missing tone errors.

- **Import Function**:
  - Click "Import" to add your own list of words or characters.
  - Supports pasting text separated by newlines, spaces, or commas.
  - Automatically generates Pinyin for imported items.

## How to Use

1.  Open `index.html` in a browser.
2.  Or run a local server:
    ```bash
    python3 -m http.server 8001
    ```
    Then visit `http://localhost:8001`.

3.  **To Import**:
    - Click "导入字词库".
    - Paste your words (e.g., "你好 世界 学习").
    - Click "Confirm".

## Technologies

- HTML/CSS/JavaScript (Vanilla)
- [pinyin-pro](https://github.com/zh-lx/pinyin-pro) for Pinyin generation.
