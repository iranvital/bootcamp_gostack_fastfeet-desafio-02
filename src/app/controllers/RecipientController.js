import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(4),
      street: Yup.string()
        .required()
        .min(8),
      number: Yup.string().required(),
      complement: Yup.string(),
      city: Yup.string()
        .required()
        .min(4),
      state: Yup.string()
        .required()
        .max(2),
      zipcode: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Recipient does not created.' });
    }
    const {
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    } = await Recipient.create(req.body);

    return res.json({
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    });
  }

  async index(req, res) {
    const recipient = await Recipient.findAll({ order: [['id', 'ASC']] });
    return res.json(recipient);
  }

  async show(req, res) {
    const { id, name, number, complement, zipcode } = await Recipient.findByPk(req.params.id);

    return res.json({
      id,
      name,
      number,
      complement,
      zipcode
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number(),
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      city: Yup.string(),
      state: Yup.string().max(2),
      zipcode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Recipient not updated.' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    const {
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    } = await recipient.update(req.body);
    return res.json({
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    });
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists.' });
    }

    await recipient.destroy();
    return res.json({ message: `${recipient.name} was deleted` });
  }
}

export default new RecipientController();
