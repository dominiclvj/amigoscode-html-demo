import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('button text', () => {
        const buttons = global.dom.window.document.getElementsByTagName('button')
        console.log(buttons)

        expect(buttons[0]).not.toBeNull()
        expect(buttons[0].textContent.toString().toLowerCase()).toBe("click me")

    })
    it('button colour', () => {
        const buttons = global.dom.window.document.getElementsByTagName('button')

        Array.from(buttons).forEach(button => {
            expect(button.style.backgroundColor).not.toBe('red')
        })
    })
})