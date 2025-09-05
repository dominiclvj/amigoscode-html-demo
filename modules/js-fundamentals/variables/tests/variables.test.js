import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/variables.js')).toString()

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})


describe("comments", () => {

    it('print string', () => {

        const varDeclaration = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'StringLiteral'
        })

        const identifier = varDeclaration.declarations[0].id.name

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === identifier)
        })

        expect(varDeclaration).not.toBeUndefined()
        expect(print).not.toBeUndefined()

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')

    })

    it('print integer', () => {

        const varDeclaration = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'NumericLiteral' && Number.isInteger(node.declarations[0].init.value)
        })

        const identifier = varDeclaration.declarations[0].id.name

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === identifier)
        })

        expect(varDeclaration).not.toBeUndefined()
        expect(print).not.toBeUndefined()

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')
        expect(print.expression.arguments[0].name).toEqual(identifier)
    })

    it('print float', () => {

        const varDeclaration = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'NumericLiteral' && !Number.isInteger(node.declarations[0].init.value)
        })

        const identifier = varDeclaration.declarations[0].id.name

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === identifier)
        })

        expect(varDeclaration).not.toBeUndefined()
        expect(print).not.toBeUndefined()

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')
        expect(print.expression.arguments[0].name).toEqual(identifier)
    })


    it('print boolean', () => {

        const varDeclaration = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'BooleanLiteral'
        })

        const identifier = varDeclaration.declarations[0].id.name
        const value = varDeclaration.declarations[0].init.value

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === identifier)
        })

        expect(varDeclaration).not.toBeUndefined()
        expect(print).not.toBeUndefined()

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')
        expect(print.expression.arguments[0].name).toEqual(identifier)

    })

    it('print date', () => {

        const varDeclaration = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'NewExpression' && node.declarations[0].init.callee.name === 'Date'
        })

        const identifier = varDeclaration.declarations[0].id.name

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === identifier)
        })

        expect(varDeclaration).not.toBeUndefined()
        expect(print).not.toBeUndefined()

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')
        expect(print.expression.arguments[0].name).toEqual(identifier)

    })

    it('print object', () => {

        const varDeclaration = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'ObjectExpression'
        })

        const identifier = varDeclaration.declarations[0].id.name

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === identifier)
        })

        expect(varDeclaration).not.toBeUndefined()
        expect(print).not.toBeUndefined()

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')
        expect(print.expression.arguments[0].name).toEqual(identifier)

    })

    it('print undefined', () => {

        const varDeclaration = global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'Identifier' && node.declarations[0].init.name === 'undefined'
        })

        const identifier = varDeclaration.declarations[0].id.name

        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].name === identifier)
        })

        expect(varDeclaration).not.toBeUndefined()
        expect(print).not.toBeUndefined()

        expect(print.expression.callee.object.name).toEqual('console')
        expect(print.expression.callee.property.name).toEqual('log')
        expect(print.expression.arguments[0].name).toEqual(identifier)

    })
})