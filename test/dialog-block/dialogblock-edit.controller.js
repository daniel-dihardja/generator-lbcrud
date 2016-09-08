/**
 * Created by danieldihardja on 08/09/16.
 */
class DialogBlockEditController {

	constructor($state, $stateParams, DialogBlock) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.DialogBlock = DialogBlock;
		this.entity = $stateParams.entity;
	}

	save() {
		var target = {id: this.entity.id};
		var _this = this;
		this.DialogBlock.prototype$updateAttributes(target, this.entity, function(res) {
			//_this.goBack();
		})
	}

	goBack() {

	}
}
DialogBlockEditController.$inject = ['$state', '$stateParams', 'DialogBlock'];
export default DialogBlockEditController;