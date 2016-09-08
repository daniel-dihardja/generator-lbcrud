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
		var _this = this;
		this.<%= entity %>.prototype$updateAttributes(target, this.entity, function(res) {
			//_this.goBack();
		})
	}

	goBack() {

	}
}
<%= entity %>EditController.$inject = ['$state', '$stateParams', '<%= entity %>'];
export default <%= entity %>EditController;