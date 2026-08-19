#!/usr/bin/env python3
"""Enable GitHub Pages after repo transfer to ahmametovainur-ctrl."""
import json
import subprocess
import sys

GH = "/tmp/gh_2.63.2_macOS_arm64/bin/gh"
REPO = "ahmametovainur-ctrl/aynur-akhmametov"


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def main():
    status = run([GH, "auth", "status"])
    if "ahmametovainur-ctrl" not in status.stdout and "ahmametovainur" not in status.stdout:
        print("Войдите в GitHub как ahmametovainur-ctrl:")
        print(f"  {GH} auth login -h github.com -p https -w")
        sys.exit(1)

    result = run([
        GH, "api", "--method", "POST", f"/repos/{REPO}/pages",
        "-f", "source[branch]=main",
        "-f", "source[path]=/",
    ])
    if result.returncode != 0 and "already exists" not in result.stderr.lower():
        print(result.stderr or result.stdout)
        sys.exit(result.returncode)

    pages = run([GH, "api", f"/repos/{REPO}/pages"])
    data = json.loads(pages.stdout)
    print("Pages URL:", data.get("html_url"))
    print("Status:", data.get("status"))


if __name__ == "__main__":
    main()
