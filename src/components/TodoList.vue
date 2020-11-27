<template>
	<form id="app" @submit.prevent="createTask">
		<label class="label" for="task">Nueva tarea: </label>
		<input type="text" v-model="newTask" id="task">
		<!-- {{ newTask }} -->
		<input type="submit" value="Crear tarea">
	</form>
</template>

<script>
	export default {
		data: () => ({
			newTask: "",
			tasks: [] 
		}),
		methods: {
			createTask() {
				let task = {
					text: this.newTask, 
					completed: false
				};
				this.tasks.push(task);
				this.newTask = "";
				console.log("Method executed")
				console.log(this.tasks)
			}
		}
	};
</script>

<style>
</style>