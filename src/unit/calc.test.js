const calc = require('../commom/calc')

// describe('calculadora', () => {
//     it('deve retornar o resultado da soma dos elementos', () => {
//         const result = calc.sum(1,2)
//         expect(result).toBe(3)
//     });
//     it('Deve retornar o resultado da subtração dos elementos', () => {
//         const result = calc.sub(2,1)
//         expect(result).toBe(1)
//     })
//     it('Deve retornar o resultado da divisao dos elementos', () => {
//         const result = calc.div(4,2)
//         expect(result).toBe(2)
//     })
//     it('Deve retornar o resultado da multiplicação dos elementos', () => {
//         const result = calc.mult(4,2)
//         expect(result).toBe(8)
//     })
// })


describe('cpf', () => {
    it('deve retornar se o cpf é valido ou não', () => {
        const result = calc.cpfValidator('909.332.760-79')
        expect(result).toBe(true)
    })
})