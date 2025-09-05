import * as fs from 'fs'
import * as path from 'path'

import {describe, expect, it} from 'vitest'

describe("comments", () => {
    it('try both quotes', () => {
        const fileContents = fs.readFileSync(path.join(__dirname,'../exercise/quotes.js')).toString()

        expect(fileContents).toContain("'")
        expect(fileContents).toContain('"')

    })
    it('use a semicolon', () => {
        const fileContents = fs.readFileSync(path.join(__dirname,'../exercise/quotes.js')).toString()

        expect(fileContents).toContain(";")

    })
})