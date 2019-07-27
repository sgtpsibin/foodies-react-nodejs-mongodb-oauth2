const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const foodSchema = new mongoose.Schema({
	food_name: {
		type: String,
		required: true
	},
	food_price: {
		type: Number,
		required: true
	},
	food_description: {
		type: String,
		default: 'This is a food description'
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
	food_image: {
		type: String
	}
});

foodSchema.plugin(mongoosePaginate);

const Food = mongoose.model('Food',foodSchema);

module.exports = Food;