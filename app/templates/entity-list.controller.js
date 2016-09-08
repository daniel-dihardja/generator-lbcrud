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
		var q = {};
		this.<%= entity %>.find(q, function(res) {
			this.entities = res;
		}.bind(this));
	}

	deleteEntity() {

	}
}
<%= entity %>ListController.$inject = ['$state', '$stateParams', '<%= entity %>'];
export default <%= entity %>ListController;