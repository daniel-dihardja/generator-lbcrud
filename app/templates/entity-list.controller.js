/**
 * Created by danieldihardja on 08/09/16.
 */
class <%= entity %>ListController {

	constructor($state, $stateParams, <%= entity %>) {
		this.$state = $state;
		this.$stateParams = $stateParams;
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

	editEntity(entity) {
		console.log('edit', entity);
		// this.$state.go();
	}

	deleteEntity(entity) {
		var target = {id: entity.id};
		this.<%= entity %>.deleteByid(target, function() {
			this.init();
		}.bind(this))
	}

	newEntity() {
		// this.$state.go();
	}
}
<%= entity %>ListController.$inject = ['$state', '$stateParams', '<%= entity %>'];
export default <%= entity %>ListController;