import { inject, Injectable } from "@angular/core";
import {
	addDoc,
	collectionData,
	CollectionReference,
	serverTimestamp,
} from "@angular/fire/firestore";
import { collection, Firestore, getDocs } from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface ITodo {
	id?: string;
	name: string;
	completed: boolean;
}
@Injectable({
	providedIn: "root",
})
export class TodoService {
	private todoCollection: CollectionReference;
	private firestore = inject(Firestore);
	constructor() {
		this.todoCollection = collection(this.firestore, "todo");
	}

	async getTodos(): Promise<ITodo[]> {
		const todosRef = collection(this.firestore, "todo");
		const querySnapshot = await getDocs(todosRef);
		return querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		})) as ITodo[];
	}

	async addTodo(todo: ITodo): Promise<string> {
		const todosRef = collection(this.firestore, "todo");

		const docRef = await addDoc(todosRef, {
			name: todo.name,
			completed: todo.completed ?? false,
			createdAt: serverTimestamp(), // auto server timestamp
		});

		return docRef.id; // returns the new task's doc ID
	}
}
