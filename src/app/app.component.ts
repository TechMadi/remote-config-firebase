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
	todos: ITodo[] = [];

	todoService = inject(TodoService);
	remoteConfigService = inject(RemoteConfigService);

	showButton = signal(false);
	showAddTodo = signal(true);

	ngOnInit() {
		this.fetchTodos();
		this.fetchConfigs();
	}

	// Get Todos
	async fetchTodos() {
		this.todos = await this.todoService.getTodos();

		console.log(this.todos);
	}

	// Add Todo
	async addTodo() {
		console.log(this.todoForm.value);
		let task = {
			name: this.todoForm.value.task as string,
			completed: false,
		};

		let taskId = await this.todoService.addTodo(task);

		if (taskId) {
			alert("Success");
		} else {
			alert("Error");
		}

		this.fetchConfigs();
		this.todoForm.reset();
	}

	// Intiate the  configs
	async fetchConfigs() {
		// Intialize the config

		await this.remoteConfigService.intiliazeRemoteConfig();

		// fetch the configs

		let profileButton = await this.remoteConfigService.getConfigValue(
			"enable_user_sign_in",
		);

		console.log(profileButton, "Profile Button");

		let isBroswerValid = await this.remoteConfigService.getConfigValue(
			"add_new_todo",
		);

		console.log(isBroswerValid, "Browser State");

		// Do you as a developer
		this.showButton.set(profileButton.asBoolean());

		this.showAddTodo.set(isBroswerValid.asBoolean());
	}
}
