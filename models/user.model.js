const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
	GoogleID: String,
	email: String,
	displayName: String,
	image: String,
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('user',userSchema);