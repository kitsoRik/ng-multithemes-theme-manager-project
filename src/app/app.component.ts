import { Component } from "@angular/core";
import { ThemeManagerService } from "projects/ng-multithemes-theme-manager/src/public-api";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "ng-multithemes-theme-manager-project";

	currentTheme = 0;
	themes = ["dark", "light", "gray"];

	constructor(private themeManager: ThemeManagerService) {
		themeManager.setStyle("theme", "assets/themes/dark.css");
	}

	nextTheme() {
		this.themeManager.setStyle(
			"theme",
			`assets/themes/${
				this.themes[
					(this.currentTheme =
						(this.currentTheme + 1) % this.themes.length)
				]
			}.css`
		);
	}
}
