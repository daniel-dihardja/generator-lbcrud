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
			console.log('new entity created');

			//this.goBack();

		}.bind(this));
	}

	goBack() {

		//this.$state.go();

	}
}

<%= entity %>CreateController.$inject = ['$state', '$stateParams', '<%= entity %>'];
export default <%= entity %>CreateController;