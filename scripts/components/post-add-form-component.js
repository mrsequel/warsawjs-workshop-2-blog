(function () {
    class PostAddFormComponent {
        constructor(data) {
            this.template = document.querySelector('#template-post-add-form-component').innerHTML;
            this.$page = document.querySelector('#page');
            this.render(this.template, data);
            this.send();
        }

        render(template, data) {
            let compliedTemplate = Mustache.render(template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compliedTemplate, "text/html");
            let firstElement = $document.querySelector('body').firstElementChild;
            this.$page.appendChild(firstElement);
        }

        send(){
            let submit = this.$page.querySelector('#addPost');
            submit.addEventListener('submit', (e) => {
                e.preventDefault();
                let data = new FormData(submit);
                let formDataObject = {};
                for (let [k, v] of data){
                    formDataObject[k] = v;
                }
                window.namespace.runtime.trigger('form-sent', formDataObject);
            });
        }
    }
    window.namespace.components.PostAddFormComponent = PostAddFormComponent;
}());
