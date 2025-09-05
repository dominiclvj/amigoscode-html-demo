import * as fs from 'fs'
import * as path from 'path'

import { describe, expect, it, beforeAll } from 'vitest'
import { parse } from '@babel/parser'

beforeAll(() => {
    const fileContents = fs.readFileSync(path.join(__dirname, '../exercise/objects.js')).toString()

    global.tree = parse(fileContents, {
        sourceType: "module",
        attachComment: true
    })
})


describe("comments", () => {
    it('create an object', () => {
        const obj= global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'ObjectExpression'
        })

        expect(obj).not.toBeUndefined()


        const stringProp = obj.declarations[0].init.properties.find(p => p.value.type === 'StringLiteral')
        const intProp = obj.declarations[0].init.properties.find(p => p.value.type === 'NumericLiteral' && Number.isInteger(p.value.value))
        const boolProp = obj.declarations[0].init.properties.find(p => p.value.type === 'BooleanLiteral')
        const decimalProp = obj.declarations[0].init.properties.find(p => p.value.type === 'NumericLiteral' && !Number.isInteger(p.value.value))
        const dateProp = obj.declarations[0].init.properties.find(p => p.value.type === 'NewExpression' && p.value.callee.name === 'Date')
        const objectProp = obj.declarations[0].init.properties.find(p => p.value.type === 'ObjectExpression')

        expect(stringProp).not.toBeUndefined()
        expect(intProp).not.toBeUndefined()
        expect(boolProp).not.toBeUndefined()
        expect(decimalProp).not.toBeUndefined()
        expect(dateProp).not.toBeUndefined()
        expect(objectProp).not.toBeUndefined()

    })
    it('print an object property', () => {
        const obj= global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'ObjectExpression'
        })

        expect(obj).not.toBeUndefined()

        const objIdentifier = obj.declarations[0].id.name


        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].object && node.expression.arguments[0].object.name === objIdentifier)
        })

        expect(print).not.toBeUndefined()
        expect(obj.declarations[0].init.properties.map(p => p.key.name)).toContain(print.expression.arguments[0].property.name)
    })

    it('print the object values', () => {
        const obj= global.tree.program.body.find(node => {
            return node.type === 'VariableDeclaration' && node.kind === 'var' && node.declarations[0].init.type === 'ObjectExpression'
        })

        expect(obj).not.toBeUndefined()

        const objIdentifier = obj.declarations[0].id.name


        const print = global.tree.program.body.find(node => {
            return (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.arguments[0].callee && node.expression.arguments[0].callee.object.name === 'Object' && node.expression.arguments[0].callee.property.name === 'values'&& node.expression.arguments[0].arguments[0].name === objIdentifier)
        })

        expect(print).not.toBeUndefined()
    })
})