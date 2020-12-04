<template>
	<div class="todo-item">
		<b-list-group-item :class="{ checked: item.done }">
			<b-row>
				<b-col cols="1">
					<b-form-checkbox
					:checked="item.done"
					@change="changeItemStatus(item)"
					>
				</b-form-checkbox>
			</b-col>
			<b-col cols="9">
				<span v-if="!editing" @dblclick="editing = true">{{ item.name }}</span>
				<input class="edit"
				v-show="editing"
				v-focus="editing"
				:value="item.name"
				@keyup.enter="doneEdit"
				@keyup.esc="cancelEdit"
				@blur="doneEdit"
				>
			</b-col>
			<b-col cols="1">
				<b-btn size="sm" v-show="!editing" variant="outline-primary" @click="editing = true">Edit</b-btn>
				<b-btn size="sm" v-show="editing" variant="success" @click="doneEdit">Listo</b-btn>
			</b-col>
			<b-col cols="1">
				<b-btn-close @click="removeItem(item)"></b-btn-close>
			</b-col>
		</b-row>
	</b-list-group-item>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

	name: 'TodoItem',

	props: ['item'],

	data () {
		return {
			editing:false
		}
	},
	directives: {
		focus (el, { value }, { context }) {
			if (value) {
				context.$nextTick(() => {
					el.focus()
				})
			}
		}
	},
	methods: {
		...mapActions([
			'toggleItem',
			'editItem'
			]),
		changeItemStatus(item) {
			this.toggleItem(item);
		},
		removeItem(item) {
			this.$store.commit("removeItem", item)
		},
		cancelEdit(event) {
			event.target.value = this.item.name;
			this.editing = false;
		},
		doneEdit(event) {
			const value = event.target.value.trim();
			const { item } = this;
			if (!value) {
				this.removeItem(item)
			} else if (this.editing) {
				this.editItem({ item, name:value });
				this.editing = false
			}
		},
	}
};
</script>

<style lang="css">
</style>