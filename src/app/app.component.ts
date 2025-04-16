import { Component, inject, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RemoteConfigService } from "./shared/services/remote-config/remote-config.service";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { ITodo, TodoService } from "./shared/services/todos/todo.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, ReactiveFormsModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "remote-config";
	todoForm = new FormGroup({
		task: new FormControl(""),
	});
	todoService = inject(TodoService);
	remoteConfigService = inject(RemoteConfigService);
	showButton = signal(false);
	addTodo = signal(true);
	todos: ITodo[] = [];

	ngOnInit() {
		this.fetchTodos();
		this.fetchConfigs();
	}

	async fetchTodos() {
		this.todos = await this.todoService.getTodos();

		console.log(this.todos);
	}

	async fetchConfigs() {
		await this.remoteConfigService.intiliazeRemoteConfig();

		let profileButton = await this.remoteConfigService.getConfigValue(
			"enable_delete_button_profile_page",
		);

		let isEdge = await this.remoteConfigService.getConfigValue("add_a_todo");

		this.showButton.set(profileButton.asBoolean());
		this.addTodo.set(isEdge.asBoolean());
	}

	async addTask() {
		console.log(this.todoForm.value);
		let task = {
			title: this.todoForm.value.task as string,
			completed: false,
		};

		let taskId = await this.todoService.addTask(task);

		if (taskId) {
			alert("Success");
		} else {
			alert("Error");
		}

		this.fetchConfigs();
		this.todoForm.reset();
	}
}
