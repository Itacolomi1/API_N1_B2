const categoriaModel = require('../model/categoria.model');


class CategoriaController {
    async create(req, res) {  // req = request  e res = response
        const categoria = new categoriaModel(req.body);
        await categoria
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }


    async getAll(req, res) {
        await categoriaModel.find().sort('descricao')
            .then(response => { return res.status(200).json(response) })
            .catch(error => { return res.status(500).json(error) });
    }

    async get(req, res) {
        await categoriaModel.findOne({ "id": req.params.id })
            .then(response => { return res.status(200).json(response) })
            .catch(error => { return res.status(500).json(error) });
    }

    async update(req, res) {

        await categoriaModel.findOneAndUpdate({ "id": Number.parseInt(req.params.id) }, req.body, { new: true })
            .then(response => { return res.status(200).json(response) })
            .catch(error => { return res.status(500).json(error) });
    }

    async delete(req, res) {
        await categoriaModel.findOneAndDelete({ "id": req.params.id })
            .then(response => { return res.status(200).json(response) })
            .catch(error => { return res.status(500).json(error) });
    }
}
