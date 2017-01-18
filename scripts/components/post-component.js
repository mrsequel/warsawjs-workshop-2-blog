(function () {
    class PostComponent {
        constructor(data) {
            this.template = document.querySelector('#template-post-component').innerHTML;
            this.$page = document.querySelector('#page');
            this.render(this.template, data);
        }

        render(template, data) {
            let compliedTemplate = Mustache.render(template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compliedTemplate, "text/html");
            let firstElement = $document.querySelector('body').firstElementChild;
            this.$page.appendChild(firstElement);
        }
    }
    window.namespace.components.PostComponent = PostComponent;
}());
