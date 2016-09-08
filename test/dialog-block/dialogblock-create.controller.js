/**
 * Created by danieldihardja on 08/09/16.
 */
class DialogBlockCreateController {

	constructor($state, $stateParams, DialogBlock) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.DialogBlock = DialogBlock;
		this.entity = {};
	}

	save() {
		var _this = this;
		this.DialogBlock.create(this.entity, function(res) {
			console.log('new entity created');
			//_this.goBack();
		});
	}

	goBack() {
		//this.$state.go();
	}
}
DialogBlockCreateController.$inject = ['$state', '$stateParams', 'DialogBlock'];
export default DialogBlockCreateController;