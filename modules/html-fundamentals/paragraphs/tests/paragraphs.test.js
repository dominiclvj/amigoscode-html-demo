import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('paragraphs', () => {
        const paragraphs = global.dom.window.document.getElementsByTagName('p')

        console.log(paragraphs.length)

        expect(paragraphs.length).toBeGreaterThanOrEqual(2)

        for (let i = 0; i<2; i++) {
            const p = paragraphs[i]
            console.log(p)

            expect(p.textContent).toBeTruthy()
        }

    })
})