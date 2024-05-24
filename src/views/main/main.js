import { AbstractView } from "../../common/view";
import onChange from "on-change";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Поиск Книг');
    }
    appStateHook(path) {
        if (path === 'favourites') {
            console.log(path)
        }
    }
    render() {
        const main = document.createElement('div');
        main.innerHTML = `Число книг: ${this.appState.favourites.length}`;
        this.app.innerHTML = '';
        this.app.append(main);
    }
}