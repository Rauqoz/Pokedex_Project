const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.key_connection).then((db) => console.log('Connected to Database'));

const schema_users = new mongoose.Schema(
	{
		db_name: { type: String, required: true },
		db_nick: { type: String, required: true },
		db_pass: { type: String, required: true },
		db_region: { type: String, required: true },
		db_gender: { type: String, required: true },
		db_age: { type: Number, required: true },
		db_email: { type: String, required: true },
		db_trainerclass: { type: String, required: true },
		db_pokemons: [ { pk: Number, nick: String } ]
	},
	{
		timestamps: true,
		timeseries: true
	}
);

const model_users = mongoose.model('pd_users', schema_users);

app.get('/', (req, res) => {
	res.send(true);
});

app.post('/signup', async (req, res) => {
	const { name_f, nick_f, pass_f, region_f, gender_f, age_f, email_f, trainerclass_f } = req.body;

	let current = {};

	const check_signup = await model_users.findOne({ db_nick: nick_f });

	if (check_signup === null) {
		const tempo = new model_users({
			db_name: name_f,
			db_nick: nick_f,
			db_pass: pass_f,
			db_region: region_f,
			db_gender: gender_f,
			db_age: age_f,
			db_email: email_f,
			db_trainerclass: trainerclass_f,
			db_pokemons: []
		});
		await tempo.save();
		current.flag = true;
	} else {
		current.flag = false;
	}

	res.send({ flag: current.flag });
});

app.post('/login', async (req, res) => {
	const { nick_f, pass_f } = req.body;

	let current = {};

	const check_login = await model_users.findOne({
		db_nick: nick_f,
		db_pass: pass_f
	});

	if (check_login === null) {
		current.flag = false;
	} else {
		current.flag = true;
		check_login.db_pass = '';
	}

	res.send(current.flag === false ? { flag: current.flag } : { flag: current.flag, data: check_login });
});

app.post('/addpk', async (req, res) => {
	const { _id, id_pk, mote_pk } = req.body;

	let current = {};

	const check_pks = await model_users.findOne({ _id });

	if (check_pks === null) {
		current.flag = false;
	} else {
		const arr_new = [ ...check_pks.db_pokemons, { pk: id_pk, nick: mote_pk } ];
		await model_users.findOneAndUpdate({ _id }, { db_pokemons: arr_new });
		current.flag = true;
	}

	res.send({ flag: current.flag });
});

app.post('/userpk', async (req, res) => {
	const { _id } = req.body;

	let current = {};

	const check_pks = await model_users.findOne({ _id });

	if (check_pks === null) {
		current.flag = false;
	} else {
		current.flag = true;
	}

	res.send(current.flag === false ? { flag: current.flag } : { flag: current.flag, pokemons: check_pks.db_pokemons });
});

const server = app.listen(port, () => {
	console.log(`server on port ${port}`);
});
