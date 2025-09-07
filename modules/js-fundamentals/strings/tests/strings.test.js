import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'
import { spawnSync } from 'child_process'

const fileName = '../exercise/strings.js'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, fileName)).toString()
    global.fileContents = fileContents

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})


describe("comments", () => {
    it('print the length of a string', () => {
        const stringValues = global.tree.program.body.filter(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'StringLiteral'
        }).map(s => s.declarations[0].init.value)

        const result = spawnSync(
            'node', [path.join(__dirname, fileName)], {encoding: 'utf-8'}
        )

        let contains = false

        stringValues.forEach((s) => {
            if (result.stdout.includes(s.length)) {
                contains = true
            }
        })

        expect(contains).toBe(true)

    })
    it('print the uppercase string', () => {
        const stringValues = global.tree.program.body.filter(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'StringLiteral'
        }).map(s => s.declarations[0].init.value)

        const result = spawnSync(
            'node', [path.join(__dirname, fileName)], {encoding: 'utf-8'}
        )

        let contains = false

        stringValues.forEach((s) => {
            if (result.stdout.includes(s.toUpperCase())) {
                contains = true
            }
        })

        expect(contains).toBe(true)
        expect(global.fileContents.includes('toUpperCase()'))

    })
    it('print concat string', () => {

        const print = global.tree.program.body.find(node => {
            // make sure it's a function call
            if (!(node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression')) {
                return false
            }

            if (!node.expression.arguments[0].type === "BinaryExpression" || !node.expression.arguments[0].left) {
                return false
            }

            if (!node.expression.arguments[0].left.right.type === 'Identifier' || !node.expression.arguments[0].operator === '+' || !node.expression.arguments[0].right.type === 'Identifier') {
                return false
            }
            const leftIdentifier = node.expression.arguments[0].left.left.name
            const rightIdentifier = node.expression.arguments[0].right.name

            const left = global.tree.program.body.find(node => {
                return node.type === 'VariableDeclaration' && node.declarations[0].id.name === leftIdentifier
            })
            const right = global.tree.program.body.find(node => {
                return node.type === 'VariableDeclaration' && node.declarations[0].id.name === rightIdentifier
            })

            expect(left).not.toBeUndefined()
            expect(right).not.toBeUndefined()

            return true
        })

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')

    })

})