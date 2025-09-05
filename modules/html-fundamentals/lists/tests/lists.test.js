import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('unordered list', () => {
        const ul = global.dom.window.document.querySelector('ul')

        expect(ul.children.length).toBeGreaterThanOrEqual(3)

        for (let i = 0; i<3; i++) {
            const li = ul.children[i]

            expect(li.textContent).toBeTruthy()
        }

    })
    it('ordered list', () => {
        const ol = global.dom.window.document.querySelector('ol')

        expect(ol.children.length).toBeGreaterThanOrEqual(3)

        for (let i = 0; i<3; i++) {
            const li = ol.children[i]

            expect(li.textContent).toBeTruthy()
        }

    })
})