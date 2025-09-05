import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/strings.js')).toString()

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})


describe("comments", () => {
    it('print the length of a string', () => {
        const stringIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'StringLiteral'
        })?.declarations[0].id.name

        expect(stringIdentifier).not.toBeUndefined()

        const print = global.tree.program.body.find(node => {
            // make sure it's a function call
            if (!(node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression')) {
                return false
            }

            // check it's argument is a typeof operator on the string identifier
            if (!(node.expression.arguments[0].object.name === stringIdentifier && node.expression.arguments[0].property.name === 'length')) {
                return false
            }

            return true
        })

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')


    })
    it('print the uppercase string', () => {
        const stringIdentifier = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'StringLiteral'
        })?.declarations[0].id.name

        expect(stringIdentifier).not.toBeUndefined()

        const print = global.tree.program.body.find(node => {
            // make sure it's a function call
            if (!(node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression')) {
                return false
            }

            if (!node.expression.arguments[0].callee) {
                return false
            }

            if (!(node.expression.arguments[0].callee.object.name === stringIdentifier && node.expression.arguments[0].callee.property.name === 'toUpperCase')) {
                return false
            }

            return true
        })

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')

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

    it('print interpolated string', () => {

        const print = global.tree.program.body.find(node => {
            // make sure it's a function call
            if (!(node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression')) {
                return false
            }

            if (!node.expression.arguments[0].type === "TemplateLiteral" || !Array.isArray(node.expression.arguments[0].expressions)) {
                return false
            }
            const leftIdentifier = node.expression.arguments[0].expressions[0].name
            const rightIdentifier = node.expression.arguments[0].expressions[1].name

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