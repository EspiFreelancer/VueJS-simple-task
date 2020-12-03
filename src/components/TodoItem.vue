<template>
	<div class="todo-item">
		<b-list-group-item>
			<b-row>
				<b-col cols="1">
					<b-form-checkbox>
					</b-form-checkbox>
				</b-col>
				<b-col cols="9">
					<span>{{ item.name }}</span>
				</b-col>
				<b-col cols="1">
					<b-btn size="sm" variant="outline-primary" @click="editItem(item)">Edit</b-btn>
				</b-col>
				<b-col cols="1">
					<b-btn-close @click="removeItem(item)"></b-btn-close>
				</b-col>
			</b-row>
		</b-list-group-item>
	</div>
</template>

<script>
export default {

	name: 'TodoItem',

	props: ['item'],

	data () {
		return {

		}
	},
	methods: {
		removeItem(item) {
			this.$store.commit("removeItem", item)
		},
		editItem(item) {
			console.log("Editando: " + item.name)
		}
	}
}
</script>

<style lang="css" scoped>
</style>