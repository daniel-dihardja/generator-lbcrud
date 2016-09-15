/**
 * Created by danieldihardja on 08/09/16.
 */
class <%= entity %>CreateController {

	constructor($state, $stateParams, <%= entity %>) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.<%= entity %> = <%= entity %>;
		this.entity = {};
	}

	save() {
		this.<%= entity %>.create(this.entity, function(res) {
			this.goBack();
		}.bind(this));
	}

	goBack() {
		this.$state.go('admin.<%= entity %>-list');
	}
}

<%= entity %>CreateController.$inject = ['$state', '$stateParams', '<%= entity %>'];
export default <%= entity %>CreateController;