(function () {
    let PostComponent = window.namespace.components.PostComponent;
    let PostAddFormComponent = window.namespace.components.PostAddFormComponent;
    let PostModel = window.namespace.models.PostModel;
    let PostListModel = window.namespace.models.PostListModel;

    class PostController {
        constructor() {
            this.postList = [];
            window.namespace.runtime.on('form-sent', (payload) => {
                payload.id = uuid.v4();
                this.postList.push(payload);
                new PostComponent(payload);
            });
        }

        _clearContainer() {
            document.querySelector('#page').innerHTML = '';
        }

        onPostHandler(req) {
            this._clearContainer();
            let id = req.params.id;
            let post = this.postList.find((post) => {
                return post.id === id;
            });
            new PostComponent(post);
        }

        onPostListHandler() {
            this._clearContainer();
            new PostAddFormComponent();
            this.postList.forEach((post) => {
                new PostComponent(post);
            });
        }
    }
    window.namespace.controllers.PostController = PostController;
}());
