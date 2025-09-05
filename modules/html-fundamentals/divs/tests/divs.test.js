import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/divs.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('div with p', () => {
        const divs = global.dom.window.document.getElementsByTagName('div')

        expect(Array.from(divs).length).toBeGreaterThan(2)

        const third = divs[2]

        const p = third.querySelector('p')
        expect(p).not.toBeNull()

    })
    it('add style', () => {
        const divs = global.dom.window.document.getElementsByTagName('div')

        expect(Array.from(divs).length).toBeGreaterThan(2)

        const third = divs[2]


        const computed = global.dom.window.getComputedStyle(third)

        const backgroundColor = computed.getPropertyValue('background-color')
        const border = computed.getPropertyValue('border')
        console.log(border)

        expect(backgroundColor).not.toBe('rgba(0, 0, 0, 0)')
        expect(border).toBeTruthy()

    })
})