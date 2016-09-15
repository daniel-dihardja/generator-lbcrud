/**
 * Created by danieldihardja on 08/09/16.
 */
class <%= entity %>ListController {

	constructor($state, $stateParams, $mdDialog, <%= entity %>, <%= entity %>Translation) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;
		this.<%= entity %> = <%= entity %>;
		this.<%= entity %>Translation = <%= entity %>Translation;

		this.entities = [];
		this.init();
	}

	init() {
		var q = {
			filter: {
				include: 'translations'
			}
		};
		this.<%= entity %>.find(q, function(res) {
			this.entities = res;
		}.bind(this));
	}

	deleteItem(entity, ev) {
		entity = entity.toJSON();
		this.$mdDialog.show(this.confirmDialog(entity.id, ev)).then(function() {
			this.deleteEntity(entity);
		}.bind(this),
		function() {
			// cancel ...  do nothingh yet
		}.bind(this));
	}

	deleteEntity(entity) {
		this.deleteEntityTranslation(entity.translations[0])
			.then(function(res) {
				return this.<%= entity %>.deleteById({id: entity.id}).$promise;
			}.bind(this))

			.then(function(res) {
				this.init();
			}.bind(this))

	}

	deleteEntityTranslation(translation) {
		translation = translation || {id: 0};
		return this.<%= entity %>Translation.deleteById({id: translation.id}).$promise;
	}

	confirmDialog(text, ev) {
		text = text || '';
		var confirm = this.$mdDialog.confirm()
			.title('Löschen')
			.textContent(text)
			.ariaLabel('Delete')
			.targetEvent(ev)
			.ok('Ja')
			.cancel('Nein');
		return confirm;
	}
}
<%= entity %>ListController.$inject = ['$state', '$stateParams', '$mdDialog', '<%= entity %>', '<%= entity %>Translation'];
export default <%= entity %>ListController;