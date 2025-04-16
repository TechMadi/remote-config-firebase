import { inject, Injectable } from "@angular/core";
import { FirebaseApp } from "@angular/fire/app";
import {
	fetchAndActivate,
	getRemoteConfig,
	getValue,
	RemoteConfig,
} from "@angular/fire/remote-config";

@Injectable({
	providedIn: "root",
})
export class RemoteConfigService {
	private remoteConfig: RemoteConfig;
	private app: FirebaseApp = inject(FirebaseApp);
	constructor() {
		this.remoteConfig = getRemoteConfig(this.app);
		this.remoteConfig.app;
		this.remoteConfig.defaultConfig;
		this.remoteConfig.fetchTimeMillis;
		this.remoteConfig.lastFetchStatus;
		this.remoteConfig.defaultConfig = {};

		this.remoteConfig.settings.minimumFetchIntervalMillis = 0;
	}

	public async intiliazeRemoteConfig() {
		try {
			await fetchAndActivate(this.remoteConfig);

			console.log("Configs fetched and activated");
		} catch (err) {
			console.error("Error fetching remote config", err);
		}
	}

	getConfigValue(key: string) {
		return getValue(this.remoteConfig, key);
	}
}
