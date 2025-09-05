import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/datatypes.js')).toString()

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})


describe("comments", () => {
    it('print types', () => {
        const stringIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'StringLiteral'
        })?.declarations[0].id.name

        expect(stringIdentifier).not.toBeUndefined()

        const intIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'NumericLiteral' && Number.isInteger(node.declarations[0].init.value)
        })?.declarations[0].id.name

        expect(intIdentifier).not.toBeUndefined()

        const floatIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'NumericLiteral' && !Number.isInteger(node.declarations[0].init.value)
        })?.declarations[0].id.name

        expect(floatIdentifier).not.toBeUndefined()

        const boolIdentifier = tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'BooleanLiteral'
        })?.declarations[0].id.name

        expect(boolIdentifier).not.toBeUndefined()

        const dateIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'NewExpression' && node.declarations[0].init.callee.name === 'Date'
        })?.declarations[0].id.name

        expect(dateIdentifier).not.toBeUndefined()

        const objectIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'ObjectExpression'
        })?.declarations[0].id.name

        expect(objectIdentifier).not.toBeUndefined()

        const undefinedIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'Identifier' && node.declarations[0].init.name === 'undefined'
        })?.declarations[0].id.name

        expect(undefinedIdentifier).not.toBeUndefined()

        const identifiers = [
            stringIdentifier,
            intIdentifier,
            floatIdentifier,
            boolIdentifier,
            dateIdentifier,
            objectIdentifier,
            undefinedIdentifier
        ]

        identifiers.forEach(id => {


            const print = global.tree.program.body.find(node => {
                // make sure it's a function call
                if (!(node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression')) {
                    return false
                }

                // check it's argument is a typeof operator on the string identifier
                if (!(node.expression.arguments[0].operator === 'typeof' && node.expression.arguments[0].argument.name === id)) {
                    return false
                }

                return true
            })

            expect(print).not.toBeUndefined()

            expect(print.expression.callee.object.name).toEqual('console')
            expect(print.expression.callee.property.name).toEqual('log')

        })
    })
})