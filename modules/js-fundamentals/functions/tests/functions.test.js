import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'
const rewire = require('rewire')

const functions = rewire('../exercise/functions.js')


beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/functions.js')).toString()

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})

const tests = [
    [1, 2],
    [-1, 5],
    [10, 100],
    [-5, -3]
]

describe("comments", () => {
    it('add function', () => {
        console.log(global.tree.program.body)
        const funcDeclaration = global.tree.program.body.find(node => {
            return node.type === 'FunctionDeclaration'
        })

        expect(funcDeclaration).not.toBeUndefined()

        const identifier = funcDeclaration.id.name

        const func = functions.__get__(identifier)

        tests.forEach(t => {
            expect(func(t[0], t[1])).toBe(t[0] + t[1])
        })

    })
})