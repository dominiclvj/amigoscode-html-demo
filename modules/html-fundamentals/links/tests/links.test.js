import * as fs from "fs";
import * as path from "path";

import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";

beforeAll(() => {
  const fileContents = fs
    .readFileSync(path.join(__dirname, "../exercise/index.html"))
    .toString();

  global.dom = new JSDOM(fileContents);
});

describe("comments", () => {
  it("list link", () => {
    let a = global.dom.window.document.querySelector('a[href="./lists.html"]');
    if (!a) {
      a = global.dom.window.document.querySelector('a[href="lists.html"]');
    }

    expect(a).not.toBeNull();
    expect(a.textContent).toBeTruthy();
  });
  it("contact link", () => {
    let a = global.dom.window.document.querySelector(
      'a[href="./pages/contact.html"]',
    );
    if (!a) {
      a = global.dom.window.document.querySelector(
        'a[href="pages/contact.html"]',
      );
    }

    expect(a).not.toBeNull();
    expect(a.textContent).toBeTruthy();
  });
});

