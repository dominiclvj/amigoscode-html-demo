import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/boolean.js')).toString()

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})


describe("comments", () => {
    it('write an if statement', () => {
        const boolIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'BooleanLiteral'
        }).declarations[0].id.name

        expect(boolIdentifier).not.toBeUndefined()

        const ifStatement = global.tree.program.body.find(node => {
            return node.type === 'IfStatement' && node.test.type === 'Identifier' && node.test.name === boolIdentifier
        })

        expect(ifStatement).not.toBeUndefined()

    })
    it('print the inverse', () => {
        const boolIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'BooleanLiteral'
        }).declarations[0].id.name

        expect(boolIdentifier).not.toBeUndefined()

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].type === 'UnaryExpression' && node.expression.arguments[0].argument.name === boolIdentifier)
        })

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')

    })
})