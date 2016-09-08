/**
 * Created by danieldihardja on 08/09/16.
 */
class <%= entity %>EditController {

	constructor($state, $stateParams, <%= entity %>) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.<%= entity %> = <%= entity %>;
		this.entity = $stateParams.entity;
	}

	save() {
		var target = {id: this.entity.id};
		this.<%= entity %>.prototype$updateAttributes(target, this.entity, function(res) {
			//this.goBack();
		}.bind(this))
	}

	goBack() {

	}
}
<%= entity %>EditController.$inject = ['$state', '$stateParams', '<%= entity %>'];
export default <%= entity %>EditController;