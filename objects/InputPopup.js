class InputPopup {
    constructor (config) {
        this.input_fields = config.input_fields || null;
        this.infotext = config.infotext || null;
        this.data = {};
        this.app = config.app;
        this.generate_html();
    }

    generate_html(){
        // Create main container
        this.background = document.createElement("div");
        this.background.classList.add("popup-background");

        this.popup = document.createElement("div");
        this.popup.classList.add("popup");

        this.background.appendChild(this.popup);

        // Create close button
        this.close_button = document.createElement("button");

        // Create save button
        this.save_button = document.createElement("button");

        this.form = document.createElement("form");

        this.input_fields.forEach((input_obj)=>{
            let input_label = document.createElement("label");
            let input_field = document.createElement("input");
            input_field.setAttribute('type', 'text');
            input_field.setAttribute('name', input_obj.name);
            input_field.setAttribute('value', input_obj.value);
            input_field.setAttribute('id', input_obj.id);
            input_label.setAttribute('for', input_obj.id);
            input_label.innerText=input_obj.label;
            
            this.form.appendChild(input_label);
            this.form.appendChild(input_field);
        })
        this.popup.appendChild(this.form);
        let button_container = document.createElement("div");
        button_container.appendChild(this.close_button);
        button_container.appendChild(this.save_button);
        this.popup.appendChild(button_container);
        this.close_button.innerText="Close";
        this.save_button.innerText="Save";
        button_container.classList.add("popup-button-container");

  


    }

    init() {
        
        this.add_eventlisteners();
    }

    close(){
        this.background.remove();
    }

    save(){
        console.log(this.form);
        let data = formToObject(this.form);
        Object.keys(data).forEach(key => {
            this.app["update"+key](data[key])
        }); 
        this.close();
    }

    add_eventlisteners () {
        this.close_button.addEventListener("click", ()=>{
            this.close();
        })
        this.save_button.addEventListener("click", ()=>{
            this.save();
        })
    }

    insert(){
        document.getElementsByTagName("body")[0].appendChild(this.background);

    }
}