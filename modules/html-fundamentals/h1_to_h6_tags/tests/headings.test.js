import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('headings', () => {
        const h4 = global.dom.window.document.querySelector('h4')

        expect(h4).not.toBeNull()
        expect(h4.textContent).toBeTruthy()

        const h5 = global.dom.window.document.querySelector('h5')

        expect(h5).not.toBeNull()
        expect(h5.textContent).toBeTruthy()

        const h6 = global.dom.window.document.querySelector('h6')

        expect(h6).not.toBeNull()
        expect(h6.textContent).toBeTruthy()
    })
})