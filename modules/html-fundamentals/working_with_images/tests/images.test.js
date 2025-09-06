import * as fs from "fs";
import * as path from "path";

import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";

beforeAll(() => {
  const fileContents = fs
    .readFileSync(path.join(__dirname, "../exercise/images.html"))
    .toString();

  global.dom = new JSDOM(fileContents);
});

describe("comments", () => {
  it("embed", () => {
    let image = global.dom.window.document.querySelector(
      'img[src="./man-working.jpg"]',
    );
    if (!image) {
      image = global.dom.window.document.querySelector(
        'img[src="man-working.jpg"]',
      );
    }

    expect(image).not.toBeNull();
  });
  it("adjust", () => {
    let image = global.dom.window.document.querySelector(
      'img[src="./man-working.jpg"]',
    );
    if (!image) {
      image = global.dom.window.document.querySelector(
        'img[src="man-working.jpg"]',
      );
    }

    expect(image).not.toBeNull();

    const computed = global.dom.window.getComputedStyle(image);

    let width = computed.getPropertyValue("width");
    let height = computed.getPropertyValue("height");

    if (!width) {
      width = image.getAttribute("width");
    }
    if (!height) {
      height = image.getAttribute("height");
    }

    expect(width).toBe("300px");
    expect(height).toBe("200px");
  });
});

