<template>
	<div class="todo-list">
		<!-- start of to-do form -->
		<b-form class="row" @submit.prevent="onSubmit">
			<b-col cols="10">
				<!-- Quite v-validate="'required'" -->
				<b-form-input 
				id="item"
				name="item" 
				class="w-100"
				type="text"
				placeholder="¿Quieres agregar una tarea?"
				v-model="item"
				autocomplete="off"
				></b-form-input>
			</b-col>
			<b-col cols="2">
				<b-button type="submit" variant="primary">Agragar</b-button>
			</b-col>
		</b-form>
		<!-- end of to-do form -->

		<!-- start of to-do list -->
		<b-row>
			<b-col md="10">
				<b-list-group>
					<b-list-group-item v-for="(item, index) in items" :key="index" :item="item">
						{{ item.name }}
					</b-list-group-item>
				</b-list-group>
			</b-col>
		</b-row>
		<!-- end of to-do list -->
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';

	export default {

		name: 'TodoList',

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
				await this.addItem(this.item);
				this.item=''; // Clear form after successfull save
				}
			}
		};
	</script>

<style lang="css" scoped>
form {
	margin-bottom: 25px;
}
.list-group-item {
	display: flex;
}
.list-group-item:hover {
	background-color: aliceblue;
}
.checked {
	font-style: italic;
	text-decoration: line-through;
	color: gray;
	background-color: #eeeeee;
}
</style>