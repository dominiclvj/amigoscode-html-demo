import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('link', () => {
        const link = global.dom.window.document.querySelector('a')

        expect(link).not.toBeNull()
        expect(link.textContent).toBe("Visit Amigoscode")
        const href = link.getAttribute('href')
        expect(href).toBe("https://amigoscode.com")

    })
})