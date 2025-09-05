import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('add title', () => {
        const title = global.dom.window.document.querySelector('title')

        expect(title).not.toBeNull()
        expect(title.textContent).toBeTruthy()

    })
    it('add header', () => {
        const header = global.dom.window.document.querySelector('h1')
        console.log(header)

        expect(header).not.toBeNull()
        expect(header.textContent).toBeTruthy()

    })
})