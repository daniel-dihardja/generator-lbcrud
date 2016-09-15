/**
 * Created by danieldihardja on 08/09/16.
 */
class <%= entity %>ListController {

	constructor($state, $stateParams, $mdDialog, <%= entity %>) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$mdDialog = $mdDialog;
		this.<%= entity %> = <%= entity %>;
		this.entities = [];
		this.init();
	}

	init() {
		var q = {
			filter: {}
		};
		this.<%= entity %>.find(q, function(res) {
			this.entities = res;
		}.bind(this));
	}

	deleteEntity(entity, ev) {
		this.$mdDialog.show(this.confirmDialog(entity.id, ev)).then(function() {
			this.<%= entity %>.deleteById({id: entity.id}, function() {
				this.init();
			}.bind(this))
		}.bind(this),
		function() {
			// cancel ...  do nothingh yet
		});
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
<%= entity %>ListController.$inject = ['$state', '$stateParams', '$mdDialog', '<%= entity %>'];
export default <%= entity %>ListController;