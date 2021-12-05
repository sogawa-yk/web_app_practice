const routes = {
    '/login': {templateId: 'login'},
    '/dashboard': {templateId: 'dashboard'},
};

function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
        return navigate('/login');
    }

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
}

function navigate(path) {
    window.history.pushState({}, path, path); //URIをスタックにためる（ページ遷移はしない）
    updateRoute(); // ページの更新
}

function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
}

window.onpopstate = () => updateRoute(); // ブラウザの戻るボタンが押されたら、onpopstateイベントが起こるので、そのイベントが起こった時にupdateRoute()を実行
updateRoute();