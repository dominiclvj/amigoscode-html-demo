import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import {JSDOM} from 'jsdom'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/index.html')).toString()

    global.dom = new JSDOM(fileContents)
})


describe("comments", () => {
    it('add row', () => {
        const table = global.dom.window.document.querySelector('table')

        expect(table).not.toBeNull()


        expect(table.rows.length).toBeGreaterThan(3)


    })
    it('ordered list', () => {
        const table = global.dom.window.document.querySelector('table')

        expect(table).not.toBeNull()

        const computed = global.dom.window.getComputedStyle(table)

        const top = computed.getPropertyValue('border-top-width')
        const bottom = computed.getPropertyValue('border-bottom-width')
        const right = computed.getPropertyValue('border-right-width')
        const left = computed.getPropertyValue('border-left-width')

        expect(top).toBe('2px')
        expect(bottom).toBe('2px')
        expect(left).toBe('2px')
        expect(right).toBe('2px')

    })
})