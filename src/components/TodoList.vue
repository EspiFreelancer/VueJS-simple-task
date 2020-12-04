<template>
	<div class="todo-list">
		<ValidationObserver ref="observer">
			<b-form class="row" @submit.prevent="onSubmit" novalidate>
				<b-col cols="10">
					<ValidationProvider rules="required" name="item">
						<b-form-group slot-scope="{ valid, errors }">	
							<b-form-input 
							id="item"
							name="item" 
							class="w-100"
							type="text"
							placeholder="¿Quieres agregar una tarea?"
							v-model="item"
							autocomplete="off"
							:state="errors.length == 0"
							></b-form-input>
							<b-form-invalid-feedback :state="errors.length == 0">
								Se requiere una tarea.
							</b-form-invalid-feedback>
						</b-form-group>
					</ValidationProvider>
				</b-col>
				<b-col cols="2">
					<b-button type="submit" variant="primary">Agragar</b-button>
				</b-col>
			</b-form>
		</ValidationObserver>
		<!-- end of to-do form -->

		<!-- start of to-do list -->
		<b-row>
			<b-col md="10">
				<b-list-group>
					<TodoItem v-for="(item, index) in items" :key="index" :item="item" />
				</b-list-group>
			</b-col>
		</b-row>
		<!-- end of to-do list -->
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import TodoItem from './TodoItem.vue';

export default {

	name: 'TodoList',

	components: {
		TodoItem,
		ValidationObserver,
		ValidationProvider
	},
	data() {
		return {
			item:''
		}
	},
	computed: {
		...mapState([
			'items'
			])
	},
	methods: {
		...mapActions([
			'addItem',
			]),
			async onSubmit() {
				const isvalid = await this.$refs.observer.validate();
				if(isvalid) {
					await this.addItem(this.item);
					this.item=''; // Clear form after successfull save
					this.$refs.observer.reset(); // Reboot the watcher
				}
			}
		}
	};
</script>

<style lang="css">
form {
	margin-bottom: 25px;
}
.list-group-item:hover {
	background-color: lightblue;
}
.checked {
	font-style: italic;
	text-decoration: line-through;
	color: gray;
	background-color: #eeeeee;
}
</style>