import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('input', () => {
        const input = global.dom.window.document.querySelector('input')

        expect(input).not.toBeNull()

        const placeholder = input.getAttribute('placeholder')

        expect(placeholder).toBe("Enter your name")

    })
})