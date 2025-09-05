import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/images.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('embed', () => {
        const image = global.dom.window.document.querySelector('img[src="./man-working.jpg"]')

        expect(image).not.toBeNull()

    })
    it('adjust', () => {
        const image = global.dom.window.document.querySelector('img[src="./man-working.jpg"]')

        expect(image).not.toBeNull()


        const width = image.getAttribute('width')
        const height = image.getAttribute('height')

        expect(width).toBe('300px')
        expect(height).toBe('200px')

    })
})