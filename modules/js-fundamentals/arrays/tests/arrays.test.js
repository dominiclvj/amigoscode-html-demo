import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/arrays.js')).toString()

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})


describe("comments", () => {
    it('print an array', () => {
        const arr = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'ArrayExpression'
        })

        const arrIdentifier = arr.declarations[0].id.name


        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === arrIdentifier)
        })

        expect(print).not.toBeUndefined()

    })
    it('print an item', () => {
        const arr = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'ArrayExpression'
        })
        console.log(arr.declarations[0].init.elements)

        const arrIdentifier = arr.declarations[0].id.name


        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].object && node.expression.arguments[0].object.name === arrIdentifier && node.expression.arguments[0].property.type === 'NumericLiteral')
        })
        console.log(print.expression.arguments[0])
        console.log(print.expression.arguments[0].property.value)

        expect(print).not.toBeUndefined()
        expect(print.expression.arguments[0].property.value).toBeLessThan(arr.declarations[0].init.elements.length)

    })
})