import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { getApp, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import {
	getRemoteConfig,
	provideRemoteConfig,
} from "@angular/fire/remote-config";
import { environment } from "../environments/environment";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		// Intialize the firebase app
		provideFirebaseApp(() => initializeApp(environment.firebase)),

		// Dependent
		provideFirestore(() => getFirestore()),
		provideRemoteConfig(() => getRemoteConfig()),
	],
};
