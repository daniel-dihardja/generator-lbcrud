/**
 * Created by danieldihardja on 08/09/16.
 */
var generators = require('yeoman-generator');


module.exports = generators.Base.extend({

	constructor: function() {
		generators.Base.apply(this, arguments);
	},

	prompting: function() {

		var done = this.async();

		var prompts = [
			{
				name: 'entity',
				message: 'Entity Name?'
			},
			{
				name: 'directory',
				message: 'Entity Dir?'
			}
		];

		this.prompt(prompts).then(function(props) {
			this.entity = props.entity;
			this.directory = props.directory;
			done();
		}
		.bind(this));
	},

	fields: function() {
		var done = this.async();
		var prompts = [
			{
				name: 'field',
				message: 'New Field:'
			}
		];

		this.prompt(prompts).then(function(props) {
			if (props.field == null || props.field === '') {
				return done();
			}

			if(! this.entityFields) this.entityFields = [];
			this.entityFields.push(props.field);

			this.fields();

		}.bind(this));
	},

	writing: function() {
		this.directory = this.directory || this.entity.toLowerCase();

		copyController(this, 'create');
		copyController(this, 'edit');
		copyController(this, 'list');
		copyTemplate(this, 'edit');
		copyTemplate(this, 'list');

		this.log(this.entity, ' created');
	}
});


function copyController(_this, method) {
	method = method.toLowerCase();
	var entityToLower = _this.entity.toLowerCase();
	var from = _this.templatePath('entity-' + method + '.controller.js');
	var fileName = _this.directory + '/' + entityToLower + '-' + method + '.controller.js';
	var to = _this.destinationPath(fileName);
	_this.fs.copyTpl(from, to, {entity: _this.entity});
}


function copyTemplate(_this, method) {
	method = method.toLowerCase();
	var entityToLower = _this.entity.toLowerCase();
	var from = _this.templatePath('entity-' + method + '.html');
	var fileName = _this.directory + '/' + entityToLower + '-' + method + '.html';
	var to = _this.destinationPath(fileName);
	_this.fs.copyTpl(from, to, {entity: _this.entity, entityFields: _this.entityFields});
}


