/**
 * Created by danieldihardja on 08/09/16.
 */
class DialogBlockListController {

	constructor($state, $stateParams, DialogBlock) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.DialogBlock = DialogBlock;
		this.entities = [];
		this.init();
	}

	init() {
		var q = {};
		this.DialogBlock.find(q, function(res) {
			this.entities = res;
		}.bind(this));
	}

	deleteEntity() {

	}
}
DialogBlockListController.$inject = ['$state', '$stateParams', 'DialogBlock'];
export default DialogBlockListController;