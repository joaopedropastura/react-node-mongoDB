const Prods = require('../models/produtos')
const express = require('express')


class ProdsSportsController {

    static async getItens(req, res) {

        const { id } = req.params

        if (!id)
        {
            const prods = await Prods.find()
            return res.status(200).send({ data: prods })
        }

        
        try {
            const prod =  await Prods.findById(id)
            return res.status(200).send({data : prod })
        } catch ( error ) {
            return res.status(500).send({ error: error })
        }
    }


    static async CreateProd(req, res) {
        const { marca, categoria, nome, preco } = req.body

        if (!marca || !categoria || !nome || !preco)
            return res.status(400).send({ message: "Dados incompletos" })

        let newProd = {
            marca: marca,
            categoria: categoria,
            nome: nome,
            preco: preco,
        }
        try {
            const p = await Prods.create(newProd)
            return res.status(201).send({message: "item added successfully", body: p})
        } catch (error) {
            return res.status(500).send({ error : error })
        }
    }

    static async UpdateProdById(req, res) {
        const { id } = req.params
        if (!id)
            return res.status(400).send({ message: "Id não existe"})
        const { marca, categoria, nome, preco } = req.body
        if(!marca && !categoria && !nome && !preco)
            return res.status(400).send({ message: "atributo invalido" })
        try{
            const newProd = await Prods.findByIdAndUpdate(
                id,
                {
                    marca: marca,
                    categoria: categoria,
                    nome: nome,
                    preco: preco,
                }
            )
            return res.status(200).send({ body: newProd })
        } catch( error ) {
            return res.status(500).send({ error: error })

        }
    }

    static async DeleteItem(req, res) {
        const { id } =  req.params

        if(!id)
            return res.status(400).send({ message: "Id não existe" })
        try {
            await Prods.findByIdAndDelete(id)
            return res.status(200).send({ message: "Item deleted successfuly" })
        } catch (error) {
            return res.status(500).send({ error: error, message: "something failled" })
        }
    }
}


module.exports = ProdsSportsController