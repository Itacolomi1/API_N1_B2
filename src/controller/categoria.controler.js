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
        await categoriaModel.findOne({ "_id": req.params.id })
            .then(response => { return res.status(200).json(response) })
            .catch(error => { return res.status(500).json(error) });
    }

    async update(req, res) {

        await categoriaModel.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true })
            .then(response => { return res.status(200).json(response) })
            .catch(error => { return res.status(500).json(error) });
    }

    async delete(req, res) {
        await categoriaModel.findOneAndDelete({ "_id": req.params.id })
            .then(response => { return res.status(200).json(response) })
            .catch(error => { return res.status(500).json(error) });
    }

    async getNextId(req, res) {
        let resposta = await categoriaModel.findOne().select("id").sort({ "id": 'descending' }).limit(1);
        let id = 1;
        if (resposta != null)
        {
            console.log(resposta);
            id = Number.parseInt(resposta.id) +1;
        }

        return res.status(200).json(id);
    }
}

module.exports = new CategoriaController();
