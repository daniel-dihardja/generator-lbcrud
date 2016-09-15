/**
 * Created by danieldihardja on 15/09/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import entityListController from './<%= entityLower %>-list.controller';
import entityCreateController from './<%= entityLower %>-create.controller';
import entityEditController from './<%= entityLower %>-edit.controller';
import entityListTpl from './<%= entityLower %>-list.html!text';
import entityCreateTpl from './<%= entityLower %>-create.html!text';
import entityEditTpl from './<%= entityLower %>-edit.html!text';


let <%= entityLower %>Module = angular.module('admin.crud-<%= entity %>', [])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.<%= entity %>-list', {
					controller: entityListController,
					controllerAs: 'vm',
					template: entityListTpl,
					url: '/<%= entity %>'
				})

			.state(
				'admin.<%= entity %>-create', {
					controller: entityCreateController,
					controllerAs: 'vm',
					template: entityCreateTpl,
					url: '/<%= entity %>/create'
				})

			.state(
				'admin.<%= entity %>-edit', {
					controller: entityEditController,
					controllerAs: 'vm',
					template: entityEditTpl,
					url: '/<%= entity %>/:id/edit'
				})

	}]);
export default <%= entityLower %>Module;